import React from "react";
import Header from "../components/header/Header";
import Category from "../components/header/Category";
import Footer from "../components/footer/Footer";
import Contents from "../components/contents/Contents";

const MainPage = () => {
  return (
    <>
      <Header />
      <Category />
      <Contents />
      <Footer />
    </>
  );
};

export default MainPage;
