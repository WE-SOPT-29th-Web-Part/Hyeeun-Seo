import React from "react";
import Header from "../components/common/Header";
import Profile from "../components/Home/Profile";
import HomeNav from "../components/Home/HomeNav";
import ArticlesContainer from "../components/Home/ArticlesContainer";
import styled from "styled-components";

const Home = () => {
  // get과 post
  // get하는 장소 -> ArticlesContainer
  // post - write
  return (
    <div>
      <Header />
      <Profile />
      <HomeNav />
      <ArticlesContainer />
    </div>
  );
};

export default Home;
