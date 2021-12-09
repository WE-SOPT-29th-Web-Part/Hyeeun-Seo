import React from "react";
import { useLocation } from "react-router";
import Header from "../components/common/Header";
import Profile from "../components/Home/Profile";
import ArticleOptions from "../components/Home/ArticleOptions";
import ImgWrapper from "../components/common/ImgWrapper";

const Article = () => {
  // 데이터를 넘기는 방법 -> Link
  // 데이터를 받는 방법 -> useLocation
  const location = useLocation();
  const { title, body, thumbnail, date, tags } = location;
  return (
    <div>
      <Header />
      <h1>{title}</h1>
      <ArticleOptions />
      <div>
        <span>서혜은</span>
        <span>.</span>
        <span>{date}</span>
      </div>
      {tags.map((tag) => (
        <span key={tag}>{tag}</span>
      ))}
      {thumbnail && (
        <ImgWrapper ratio="50%">
          <img src={thumbnail} alt="thumbnail" />
        </ImgWrapper>
      )}
      <div>{body}</div>
      <Profile />
    </div>
  );
};

export default Article;
