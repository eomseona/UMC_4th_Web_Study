import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import TitleBox from "../components/TitleBox";
import PreviewContainer from "../components/PreviewContainer";
import { resetAnswer } from "../store";
import { Wrapper } from "./Result";
import { useSelector } from "react-redux";
import { theme } from "../styles/theme";

const Preview = () => {
  const dispatch = useDispatch();
  const form = useSelector((state) => state.formReducer);
  const questions = useSelector((state) => state.questionReducer);

  const handleReset = () => {
    dispatch(resetAnswer());
  };

  return (
    <Wrapper style={{ flexDirection: "column", alignItems: "center" }}>
      <div className="question">
        <TitleBox title={form.title} detail={form.detail} />
        {questions.map((question) => (
          <PreviewContainer key={question.id} questionId={question.id} />
        ))}
      </div>
      <Buttons>
        <Link to={"/result"} style={{ textDecoration: "none" }}>
          <div className="submit-button">제출</div>
        </Link>
        <div className="reset-button" onClick={handleReset}>
          양식 지우기
        </div>
      </Buttons>
    </Wrapper>
  );
};

export default Preview;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  width: 768px;
  justify-content: space-between;
  margin-top: 20px;

  .submit-button {
    cursor: pointer;
    font-size: 16px;
    padding: 10px 0;
    width: 80px;
    border-radius: 5px;
    ${theme.flexCenter}
    color: ${theme.color.white};
    background: ${theme.color.purple};
  }

  .reset-button {
    cursor: pointer;
    font-size: 14px;
    color: ${theme.color.purple};
  }
`;
