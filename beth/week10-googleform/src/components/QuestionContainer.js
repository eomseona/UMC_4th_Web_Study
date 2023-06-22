import styled from "styled-components";
import Dropdown from "../components/Dropdown";
import { makeStyles, Switch } from "@material-ui/core";
import { theme } from "../styles/theme";
import QUESTION_TYPES from "../QuestionTypes";
import { useDispatch, useSelector } from "react-redux";
import {
  setNecessary,
  setQuestionContent,
  deleteQuestion,
  addQuestion,
} from "../store";
import shortid from "shortid";
import NarrativeQuestion from "../components/NarrativeQuestion";
import OptionalQuestion from "../components/OptionalQuestion";
import { CopyIcon, DragIcon, TrashIcon } from "../icons/icons";

const menus = [
  { id: QUESTION_TYPES.SHORT_ANSWER, option: "단답형" },
  {
    id: QUESTION_TYPES.LONG_ANSWER,
    option: "장문형",
  },
  {
    id: QUESTION_TYPES.ONE_CHOICE,
    option: "객관식 질문",
  },
  {
    id: QUESTION_TYPES.MULTIPLE_CHOICE,
    option: "체크박스",
  },
  {
    id: QUESTION_TYPES.DROP_DOWN,
    option: "드롭다운",
  },
];

const QuestionContainer = ({ questionId, provided }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questionReducer);

  const selectedQuestion = questions.find((item) => item.id === questionId);
  if (!selectedQuestion) return null;
  const {
    type: questionType,
    options,
    questionContent,
    isNecessary,
  } = selectedQuestion;
  const lastOptionIndex = options.length + 1;

  const newQuestion = (newId) => {
    return {
      ...selectedQuestion,
      id: newId,
    };
  };

  const handleSwitch = () => {
    dispatch(setNecessary(questionId));
  };

  const handleQuestionChange = (e) => {
    dispatch(
      setQuestionContent({
        id: questionId,
        questionContent: e.target.value,
      })
    );
  };

  const handleDeleteQuestion = () => {
    dispatch(deleteQuestion(questionId));
  };

  const handleCopyQuestion = () => {
    const newId = shortid();
    dispatch(addQuestion(newQuestion(newId)));
  };

  const getOptionList = (type) => {
    const optionList = options
      ?.map((option) => (
        <OptionalQuestion
          key={option.id}
          questionId={questionId}
          optionId={option.id}
          optionContent={option.option}
          type={type}
          isLast={false}
        />
      ))
      .concat(
        <OptionalQuestion
          key={lastOptionIndex}
          questionId={questionId}
          optionId={lastOptionIndex}
          optionContent="옵션 추가"
          type={type}
          isLast={true}
        />
      );
    return optionList;
  };

  const getInput = () => {
    switch (questionType) {
      case QUESTION_TYPES.ONE_CHOICE:
      case QUESTION_TYPES.MULTIPLE_CHOICE:
      case QUESTION_TYPES.DROP_DOWN:
        return getOptionList(questionType);
      case QUESTION_TYPES.SHORT_ANSWER:
        return <NarrativeQuestion type="short" questionId={questionId} />;
      case QUESTION_TYPES.LONG_ANSWER:
        return <NarrativeQuestion type="long" questionId={questionId} />;
      default:
        return;
    }
  };

  return (
    <Wrapper>
      <div className="question">
        <input
          className="question-input"
          type="text"
          placeholder="질문"
          value={questionContent}
          onChange={handleQuestionChange}
        />

        <Dropdown questionId={questionId} menus={menus} />
      </div>
      {getInput()}
      <hr />
      <div className="settings">
        <img onClick={handleCopyQuestion} src={CopyIcon} alt="copy" />
        <img onClick={handleDeleteQuestion} src={TrashIcon} alt="trash" />
        <div className="switch-label">필수</div>
        <Switch
          className={classes.colorSecondary}
          checked={isNecessary}
          onChange={handleSwitch}
        />
      </div>
    </Wrapper>
  );
};

export default QuestionContainer;

const useStyles = makeStyles({
  colorSecondary: {
    "& .MuiSwitch-colorSecondary.Mui-checked": {
      color: `${theme.color.purple}`,
    },
    "& .MuiSwitch-colorSecondary.Mui-checked + .MuiSwitch-track": {
      backgroundColor: `${theme.color.purple}`,
    },
  },
});

const Wrapper = styled.div`
  background: ${theme.color.white};
  width: 768px;
  height: 240px;
  border-radius: 10px;
  margin: 20px 0;
  padding: 10px 20px;
  height: auto !important;

  .handler {
    ${theme.flexCenter}
    .drag-icon {
      width: 40px;
    }
  }

  input {
    border: none;
  }

  .question {
    display: flex;
    align-items: end;
    justify-content: space-between;
  }

  .question-input {
    background: ${theme.color.gray};
    width: 440px;
    height: 40px;
    padding: 10px;
    font-size: 16px;
    border-bottom: 1px solid ${theme.color.border_gray2};

    &:focus {
      transition: 0.1s ease;
      border-bottom: 2px solid ${theme.color.purple};
    }

    &::placeholder {
      color: ${theme.color.border_gray2};
    }
  }

  hr {
    margin-top: 60px;
    border: 1px solid ${theme.color.border_gray};
  }

  .settings {
    display: flex;
    align-items: center;
    justify-content: end;

    img {
      cursor: pointer;
      margin-right: 16px;
    }

    .switch-label {
      font-size: 14px;
    }
  }
`;
