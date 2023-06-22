import { makeStyles, Radio, Checkbox } from "@material-ui/core";
import styled from "styled-components";
import { theme } from "../styles/theme";
import QUESTION_TYPES from "../QuestionTypes";
import {
  markMultipleAnswer,
  addOption,
  setOptionContent,
  markOneAnswer,
} from "../store";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

const OptionalQuestion = ({
  type,
  optionId,
  questionId,
  optionContent,
  isLast,
  isAnswer,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const location = useLocation();
  const isPreview = location.pathname === "/preview";
  const isResult = location.pathname === "/result";

  const handleAddOption = () => {
    isLast && dispatch(addOption({ id: questionId, optionId }));
  };

  const handleContentChange = (e) => {
    dispatch(
      setOptionContent({
        id: questionId,
        optionId,
        optionContent: e.target.value,
      })
    );
  };

  const isChecked = () => {
    if (isPreview || isResult) return isAnswer;
    else return false;
  };

  const isDisabled = () => {
    if (isResult) return true;
    else return false;
  };

  const showOptionButton = () => {
    switch (type) {
      case QUESTION_TYPES.ONE_CHOICE:
        return (
          <Radio
            classes={{ root: classes.root, checked: classes.checked }}
            disabled={isDisabled()}
            onClick={() =>
              dispatch(
                markOneAnswer({
                  id: questionId,
                  optionId,
                  isAnswer,
                })
              )
            }
            value={String(optionId)}
            checked={isChecked()}
          />
        );
      case QUESTION_TYPES.MULTIPLE_CHOICE:
        return (
          <Checkbox
            classes={{ root: classes.root, checked: classes.checked }}
            disabled={isDisabled()}
            onChange={() =>
              dispatch(
                markMultipleAnswer({
                  id: questionId,
                  optionId,
                  isAnswer,
                })
              )
            }
            value={String(optionId)}
            checked={isChecked()}
          />
        );
      case QUESTION_TYPES.DROP_DOWN:
        return <div className="dropdown-option">{optionId}</div>;
      default:
        return;
    }
  };

  return (
    <Wrapper isLast={isLast}>
      {showOptionButton()}
      {isPreview || isResult ? (
        <div className="preview-option">{optionContent}</div>
      ) : (
        <input
          type="text"
          value={optionContent}
          onChange={handleContentChange}
          onClick={handleAddOption}
        />
      )}
    </Wrapper>
  );
};

export default OptionalQuestion;

const Wrapper = styled.div`
  display: flex;
  height: 42px;
  margin-top: 10px;

  .dropdown-option {
    ${theme.flexCenter}
    font-size: 14px;
    width: 42px;
    height: 42px;
  }

  input {
    color: ${(props) =>
      props.isLast ? theme.color.border_gray2 : theme.color.black};
    font-size: 14px;
    width: 84%;
    border: none;

    &:hover {
      border: 0;
      outline: 0;
      background: transparent;
      border-bottom: 1px solid ${theme.color.border_gray};
    }

    &:focus {
      background: transparent;
      transition: 0.1s ease;
      border-bottom: 2px solid ${theme.color.purple};
    }
  }

  .preview-option {
    font-size: 14px;
    ${theme.flexCenter}
  }
`;

export const useStyles = makeStyles({
  root: {
    "& svg": {
      width: "24px",
      height: "24px",
    },
    "&$checked": {
      color: `${theme.color.purple}`,
    },
  },
  checked: {},
});
