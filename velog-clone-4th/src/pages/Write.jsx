import React, { useState } from 'react';
import ArticleBody from '../components/Write/ArticleBody';
import ArticleFooter from '../components/Write/ArticleFooter';
import ArticleTags from '../components/write/ArticleTags';
import ArticleTitle from '../components/Write/ArticleTitle';

const Write = () => {
    // 필요한 데이터를 입력과 동시에 받아오고(state로 관리), 출간하기를 누르면 axios.post를 시킨다
    const [articleData, setArticleData] = useState({
        id:"",
        title:"",
        body:"",
        summary:"",
        series:"",
        tags:[],
        thumbnail:"",
        date:""
    });

    return (
        <div>
            <ArticleTitle />
            <ArticleTags />
            <ArticleBody />
            <ArticleFooter />
        </div>
    );
};

export default Write;