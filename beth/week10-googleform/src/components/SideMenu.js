import styled from "styled-components";
import { ShowIcon } from "../icons/icons";
import { addForm } from "../store";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { theme } from "../styles/theme";

const SideMenu = (title, detail) => {
  const dispatch = useDispatch();

  const handlePreview = () => {
    dispatch(addForm(title, detail));
  };

  return (
    <Wrapper>
      <div className="container">
        <Link to="/preview">
          <img onClick={handlePreview} src={ShowIcon} alt="preview" />
        </Link>
      </div>
    </Wrapper>
  );
};

export default SideMenu;

const Wrapper = styled.div`
  margin-left: 60px;
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    justify-content: space-around;
    background: "#ffffff";
    border-radius: 14px;
    width: 56px;
    height: 100px;

    img {
      background-color: ${theme.color.background};
      cursor: pointer;
      width: 38px;
      height: 38px;
    }
  }
`;
