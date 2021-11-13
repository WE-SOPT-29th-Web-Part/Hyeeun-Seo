import React from 'react';
import styled from 'styled-components';

const ArticleCard = ({ article }) => {
    // 구조 분해 할당
    const { id, title, body, summary, series, tags, thumbnail, date } = article;

    return (
        <StyledCard>
            <StyledImg src = {thumbnail} alt="" />
            <h3>{title}</h3>
            <h4>{summary}</h4>
            {tags.map((tag) => (
                <span key={tag}>{tag}</span>
            ))}
            <div>{date}</div>
        </StyledCard>
    );
};

export default ArticleCard;

const StyledCard = styled.div`
    margin: 30px;
    display: block;
    width: 600px;
    height: 300px;
    
    overflow: hidden;
    position: relative;
    padding-bottom: 13%;
`;

const StyledImg = styled.img`

`;