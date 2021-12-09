import React from "react";
import { Navigate, useNavigate } from "react-router";
import { client } from "../../libs/api";

const ArticleOptions = ({ id }) => {
  const handleArticleDelete = async () => {
    const navigate = useNavigate();
    const handleArticleDelete = async () => {
      await client.delete(`article/${id}`);
      navigate("/");
    };
    const handleNavigateEditPage = () => {
      navigate(`/article/edit/${id}`);
    };
  };

  return (
    <div>
      <button>통계</button>
      <button onClick={handleNavigateEditPage}>수정</button>
      <button onClick={handleArticleDelete}>삭제</button>
    </div>
  );
};

export default ArticleOptions;
