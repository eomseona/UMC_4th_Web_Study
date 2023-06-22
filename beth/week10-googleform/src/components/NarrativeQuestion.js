import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { setNarrativeAnswer } from "../store";
import styled from "styled-components";
import { theme } from "../styles/theme";

const NarrativeQuestion = (type, questionId) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const isPreview = location.pathname === "/preview";
  const isResult = location.pathname === "/result";
  const questions = useSelector((state) => state.questionReducer);
  const question = questions?.find((item) => item.id === questionId);

  const handleChange = (e) => {
    dispatch(
      setNarrativeAnswer({
        id: questionId,
        narrativeContent: e.target.value,
      })
    );
  };

  return (
    <Wrapper type={type}>
      {!isPreview && !isResult ? (
        <input
          type="text"
          disabled
          placeholder={type === "short" ? "단답형 텍스트" : "장문형 텍스트"}
        />
      ) : (
        <input
          type="text"
          placeholder={isPreview ? "내 답변" : ""}
          value={question?.narrativeAnswer}
          onChange={handleChange}
          disabled={isResult ? true : undefined}
        />
      )}
    </Wrapper>
  );
};

export default NarrativeQuestion;

export const Wrapper = styled.div`
  margin-top: 20px;

  input {
    border: none;
    line-height: 24px;
    width: ${(props) => (props.type === "short" ? 50 : 82)}%;
    background: transparent;
    border-bottom: 1px dashed ${theme.color.border_gray};
  }
`;
