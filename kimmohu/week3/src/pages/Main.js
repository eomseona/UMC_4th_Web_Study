import React from "react";
import Header from "../components/UI/Header";
import CategoryBar from "../components/Category/CategoryBar";
import MainGallery from "../components/MainGallery/MainGallery";
import { styled } from "styled-components";

const Main = () => {
  return (
    <GridLayout>
      <Header />
      <CategoryBar />
      <MainGallery />
    </GridLayout>
  );
};

export default Main;

const GridLayout = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas:
    "header header header"
    "category category category"
    " gal    gal    gal ";

  @media (max-width: 950px) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "header header"
      "category category"
      "gal gal";
  }
`;
