import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../styles/theme";

const TitleBox = ({ title, detail, handleChange }) => {
  const location = useLocation();
  const { pathname } = location;
  const isPreview = pathname === "/preview";
  const isResult = pathname === "/result";

  return (
    <Wrapper>
      {!isPreview && !isResult ? (
        <div className="inputs">
          <input
            type="text"
            className="inputs__title"
            placeholder="제목 없는 설문지"
            name="title"
            value={title}
            onChange={({ target: { value } }) =>
              handleChange && handleChange("title", value)
            }
          />
          <input
            type="text"
            className="inputs__detail"
            placeholder="설문지 설명"
            name="detail"
            value={detail}
            onChange={({ target: { value } }) =>
              handleChange && handleChange("detail", value)
            }
          />
        </div>
      ) : (
        <div className="preview">
          <div className="preview__title">{title}</div>
          <div className="preview__detail">{detail}</div>
          <hr />
          <div className="preview__guide">* 필수항목</div>
        </div>
      )}
    </Wrapper>
  );
};

export default TitleBox;

const Wrapper = styled.div`
  background: ${theme.color.white};
  width: 808px;
  height: 140px;
  border-radius: 10px;

  input {
    border: none;
    margin-left: 20px;
  }

  .inputs {
    display: flex;
    flex-direction: column;

    &:before {
      content: "";
      height: 12px;
      border-top-right-radius: 10px;
      border-top-left-radius: 10px;
      width: 100%;
      background: ${theme.color.purple};
    }

    &__title {
      font-size: 32px;
      margin-top: 24px;
      &::placeholder {
        color: ${theme.color.black};
      }
    }

    &__detail {
      margin-top: 16px;
    }
  }

  .preview {
    display: flex;
    flex-direction: column;

    &:before {
      content: "";
      height: 12px;
      border-top-right-radius: 10px;
      border-top-left-radius: 10px;
      width: 100%;
      background: ${theme.color.purple};
    }

    &__title {
      margin-left: 20px;
      margin-top: 16px;
      font-size: 32px;
    }

    &__detail {
      margin-left: 20px;
      margin-top: 16px;
      font-size: 14px;
    }

    hr {
      width: 100%;
      margin-top: 12px;
      border: none;
      height: 1px;
      background: ${theme.color.border_gray};
    }

    &__guide {
      margin-left: 20px;
      font-size: 12px;
      color: ${theme.color.red};
    }
  }
`;
