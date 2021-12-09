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

  const handleDataChange = (key, value) => {
    // key: title, body, summary, thumbnail
    // value: e.target.value
    const tempArticleData = { ...articleData };
    // 객체 복사 -> 상태는 불변성을 유지해야 한다. 상태 불변성
    // 대괄호 안에 키를 넣어야 value 변수로 tempArticleData 객체 속성 조회 가능
    tempArticleData[key] = value;
    setArticleData(tempArticleData);
  };
  // 배열(tags)를 수정하기 위한 함수
  const handleArrDataChange = (key, value) => {
    const tempArticleData = { ...articleData };
    tempArticleData[key] = [...tempArticleData[key], value];
    setArticleData(tempArticleData);
  };

  const handleArrDataRemove = (key, value) => {
    const tempArticleData = { ...articleData };
    // filter
    tempArticleData[key] = tempArticleData[key].filter((el) => el !== value);
    // value -> 클릭된 태그 속에 있는 글자
    setArticleData(tempArticleData);
  };

  return (
    <div>
      <button onClick={handlePost}>POST!</button>
      <ArticleTitle onDataChange={handleDataChange} />
      <ArticleTags
        tags={articleData.tags}
        articleData={articleData}
        onArrDataChange={handleArrDataChange}
        onArrDataRemove={handleArrDataRemove}
      />
      <ArticleBody onDataChange={handleDataChange} />
      <ArticleFooter />
    </div>
  );
};

export default Write;
