import React from "react";
import Header from "../components/common/Header";
import Profile from "../components/home/Profile";
import HomeNav from "../components/home/HomeNav";
import ArticlesContainer from "../components/home/ArticlesContainer";
import SeriesCategory from "../components/home/SeriesCategory";
import styled from "styled-components";
//import { Route } from "react-router"; 그래서 리액트 라우터랑 라우터 돔이랑 머가 다른데
import { Routes, Route } from "react-router-dom";

const Home = () => {
  // get과 post
  // get하는 장소 -> ArticlesContainer
  // post - write
  return (
    <div>
      <Header />
      <Profile />
      <HomeNav />
      <Routes>
        <Route path="/series" element={() => <SeriesCategory />} />
        <Route path="/" element={() => <ArticlesContainer />} />
      </Routes>
      <ArticlesContainer />
    </div>
  );
};

export default Home;
