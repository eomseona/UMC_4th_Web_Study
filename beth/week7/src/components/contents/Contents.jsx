import React from "react";
import "./Contents.css";
import RoomContainer from "./RoomContainer";
import styled from "styled-components";

const Contents = () => {
  return (
    <ContentsLayout>
      <RoomBox>
        <RoomContainer />
      </RoomBox>
    </ContentsLayout>
  );
};

export default Contents;

const ContentsLayout = styled.div`
  height: 530px;
  margin-top: 157px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const RoomBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  grid-gap: 20px;
  width: 100%;
  padding: 0 70px;
  box-sizing: border-box;
  margin-top: 20px;
  @media all and (min-width: 550px) and (max-width: 700px) {
    margin-left: 50px;
  }
`;
