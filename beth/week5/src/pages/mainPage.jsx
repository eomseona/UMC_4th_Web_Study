import React from "react";
import Header from "../components/header/Header";
import Category from "../components/header/Category";
import Footer from "../components/footer/Footer";
import Contents from "../components/contents/Contents";

const mainPage = () => {
  return (
    <>
      <Header />
      <Category />
      <Contents />
      <Footer />
    </>
  );
};

export default mainPage;
