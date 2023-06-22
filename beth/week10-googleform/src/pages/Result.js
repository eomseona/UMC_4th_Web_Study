import styled from "styled-components";
import TitleBox from "../components/TitleBox";
import PreviewContainer from "../components/PreviewContainer";
import { useSelector } from "react-redux";
import { theme } from "../styles/theme";

const Result = () => {
  const form = useSelector((state) => state.formReducer);
  const questions = useSelector((state) => state.questionReducer);

  return (
    <Wrapper>
      <div className="page-title">답변 받은 내용입니다</div>
      <TitleBox title={form.title} detail={form.detail} />
      {questions.map((question) => (
        <PreviewContainer key={question.id} questionId={question.id} />
      ))}
    </Wrapper>
  );
};

export const Wrapper = styled.div`
  height: 1000px;
  background: ${theme.color.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding-top: 30px;

  .page-title {
    font-size: 38px;
    margin-bottom: 40px;
  }
`;

export default Result;
