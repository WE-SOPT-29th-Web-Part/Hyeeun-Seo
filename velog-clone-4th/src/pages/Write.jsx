import React, { useState } from "react";
import ArticleBody from "../components/Write/ArticleBody";
import ArticleFooter from "../components/Write/ArticleFooter";
import ArticleTags from "../components/Write/ArticleTags";
import ArticleTitle from "../components/Write/ArticleTitle";
import { client } from "../libs/api";

const Write = () => {
  // 필요한 데이터를 입력과 동시에 받아오고(state로 관리), 출간하기를 누르면 axios.post를 시킨다
  const [articleData, setArticleData] = useState({
    id: "", // articleData.length+1해주면 됨
    title: "",
    body: "",
    summary: "",
    series: "",
    tags: [],
    thumbnail: "",
    date: "", // 오늘 날짜 찍어주면 됨
  });

  const createArticle = async () => {
    const { data } = await client.get("/article");
    const id = data.length + 1; //이게 먼소리야
    const now = new Date();
    const date = `${now.getFullYear()}년 ${
      now.getMonth() + 1
    }월 ${now.getDate()}일`;

    await client.post("/article", {
      ...articleData,
      id,
      date,
      summary: "요약",
    });
  };
  const handlePost = async () => {
    await createArticle();
  };

  return (
    <div>
      <button onClick={handlePost}>POST!</button>
      <ArticleTitle setArticleData={setArticleData} />
      <ArticleTags
        tags={articleData.tags}
        articleData={articleData}
        setArticleData={setArticleData}
      />
      <ArticleBody setArticleData={setArticleData} />
      <ArticleFooter />
    </div>
  );
};

export default Write;