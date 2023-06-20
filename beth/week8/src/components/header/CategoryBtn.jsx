import React from "react";
import styled from "styled-components";

const CategoryBtn = (props) => {
  return (
    <StyledBtn>
      <img src={props.image} alt="" width={23} height={23} />
      <Text>{props.text}</Text>
    </StyledBtn>
  );
};

export default CategoryBtn;

const StyledBtn = styled.button`
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #717171;
  align-items: center;
  justify-content: center;
`;

const Text = styled.div`
  margin-top: 10px;
  font-size: 12px;
`;
