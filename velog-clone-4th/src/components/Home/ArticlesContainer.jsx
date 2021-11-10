import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { client } from "../../libs/api";
import ArticleCard from './ArticleCard';

const ArticlesContainer = () => {
    const [articleData, setArticleData] = useState([]);
    // 데이터를 받아보겠습니다 - axios + async/await
    const getArticleData = async () => {
        const {data} = await client.get("/article");
        setArticleData(data);
    }
    // http://localhost:3200/ - 다회 통신 -> axios.create

    useEffect(() => {
        getArticleData();
    }, []);
    
    return (
        <div>
            {articleData.map((article) => (
                <ArticleCard key={article.id} article={article} />
            ))}
        </div>
        // ArticleCard 컴포넌트 3개 형성될 것
        // key는 고유값으로 하나 들어가야 함 + article을 props로 넘겨줌
    );
};

export default ArticlesContainer;