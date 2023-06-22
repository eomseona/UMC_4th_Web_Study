import styled from "styled-components";
import Dropdown from "./Dropdown";
import NarrativeQuestion from "../components/NarrativeQuestion";
import OptionalQuestion from "../components/OptionalQuestion";
import { useSelector } from "react-redux";
import QUESTION_TYPES from "../QuestionTypes";
import { theme } from "../styles/theme";

const PreviewContainer = ({ questionId }) => {
  const questions = useSelector((state) => state.questionReducer);
  const selectedQuestion = questions.find((item) => item.id === questionId);
  if (!selectedQuestion) return null;
  const {
    type: questionType,
    options,
    questionContent,
    isNecessary,
  } = selectedQuestion;
  const isAnswer = (value) =>
    selectedQuestion.answers.findIndex((item) => item === value) >= 0;

  const getOptionList = (type) => {
    const optionList = options?.map((option) => (
      <OptionalQuestion
        isAnswer={isAnswer(option.id)}
        key={option.id}
        questionId={questionId}
        optionId={option.id}
        type={type}
        optionContent={option.option}
        isLast={false}
      />
    ));
    return optionList;
  };

  const getInput = () => {
    switch (questionType) {
      case QUESTION_TYPES.ONE_CHOICE:
      case QUESTION_TYPES.MULTIPLE_CHOICE:
        return getOptionList(questionType);
      case QUESTION_TYPES.DROP_DOWN:
        return <Dropdown questionId={questionId} menus={options} />;
      case QUESTION_TYPES.SHORT_ANSWER:
        return <NarrativeQuestion type="short" questionId={questionId} />;
      case QUESTION_TYPES.LONG_ANSWER:
        return <NarrativeQuestion tion type="long" questionId={questionId} />;
      default:
        return;
    }
  };
  return (
    <Wrapper isNecessary="true">
      <span className="title">{questionContent}</span>
      {isNecessary && <span className="title_necessary">*</span>}
      {getInput()}
    </Wrapper>
  );
};

export default PreviewContainer;

const Wrapper = styled.div`
  background: ${theme.color.white};
  width: 768px;
  height: 240px;
  border-radius: 10px;
  margin-top: 20px;
  padding: 20px;
  height: auto !important;

  .title {
    font-size: 16px;
  }

  .title_necessary {
    font-size: 16px;
    color: ${theme.color.red};
    font-weight: bold;
    margin-left: 5px;
  }
`;
