import { MenuItem, makeStyles, createStyles, Select } from "@material-ui/core";
import styled from "styled-components";
import { theme as styleTheme } from "../styles/theme";
import {
  ThemeProvider,
  unstable_createMuiStrictModeTheme,
} from "@material-ui/core";
import { changeType, markOneAnswer } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const Dropdown = ({ questionId, menus, isAnswer }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const theme = unstable_createMuiStrictModeTheme();

  const location = useLocation();
  const isPreview = location.pathname === "./preview";
  const isResult = location.pathname === "./result";

  const questions = useSelector((state) => state.questionReducer);
  const question = questions.find((item) => item.id === questionId);
  if (!question) return null;
  const { type: questionType, answers } = question;
  const selectedAnswer = answers.length > 0 ? answers[0] : "";

  const handleTypeChange = (e) => {
    dispatch(changeType({ id: questionId, type: e.target.value }));
  };

  const handleAnswerChange = (e) => {
    dispatch(
      markOneAnswer({
        id: questionId,
        optionId: e.target.value,
        isAnswer,
      })
    );
  };

  const showValue = () => {
    if (isPreview || isResult) return selectedAnswer;
    else return questionType;
  };

  return (
    <Wrapper>
      <ThemeProvider theme={theme}>
        <Select
          className={classes.root}
          disableUnderline
          disable={isResult ? true : undefined}
          value={showValue()}
          onChange={isPreview ? handleAnswerChange : handleTypeChange}
        >
          {menus.map((menu) => (
            <MenuItem key={menu.id} value={menu.id} className={classes.menu}>
              <div className="menu-content">{menu.option}</div>
            </MenuItem>
          ))}
        </Select>
      </ThemeProvider>
    </Wrapper>
  );
};

export default Dropdown;

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: theme.spacing(26),
      borderRadius: "4px",
      fontSize: "16px",
      border: `1px solid ${styleTheme.color.border_gray}`,
      marginTop: "20px",

      "& .MuiSelect-select.MuiSelect-select": {
        padding: "12px",
      },

      "& .MuiSelect-icon": {
        width: "1.6em",
        height: "1.6em",
        right: "10px",
      },
    },

    menu: {
      fontSize: "16px",
    },
  })
);

const Wrapper = styled.div`
  display: block;

  .menu-content {
    width: 150px;
    overflow: hidden;
    color: ${styleTheme.color.black};
  }
`;
