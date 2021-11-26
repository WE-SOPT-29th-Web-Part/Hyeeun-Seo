import React from "react";
import styled from "styled-components";

const ArticleCard = ({ article }) => {
  // 구조 분해 할당
  const { id, title, body, summary, series, tags, thumbnail, date } = article;

  return (
    <StyledCard>
      <StyledImgWrapper>
        <img src={thumbnail} alt="" />
      </StyledImgWrapper>
      <StyledTitle>{title}</StyledTitle>
      <StyledSummary>{summary}</StyledSummary>
      {tags.map((tag) => (
        <StyledTag key={tag}>{tag}</StyledTag>
      ))}
      <StyledDate>{date}</StyledDate>
    </StyledCard>
  );
};

export default ArticleCard;

const StyledCard = styled.section`
  background-color: rgb(230, 230, 230);
  padding: 5px;
  margin: 40px auto;
  width: 782px;
`;

const StyledImgWrapper = styled.div`
  display: block;
  overflow: hidden;
  height: 450px;
  width: 782px;

  & > img {
    width: 100%;
    margin-top: -20%;
  }
`;

const StyledTitle = styled.h3`
  font-weight: bolder;
  margin-bottom: 0;
`;

const StyledSummary = styled.h4`
  font-weight: lighter;
  font-size: 14px;
  margin-top: 10px;
`;

const StyledTag = styled.span`
  margin: 13px 20px;
  justify-content: center;
  color: rgb(105, 207, 156);
  font-weight: bolder;
  border-radius: 20px;
  background-color: rgb(255, 255, 255);
  padding: 5px 10px;
  margin: 10px;
`;

const StyledDate = styled.div`
  color: #979797;
  font-size: 13px;
  font-weight: bolder;
  margin: 15px 0 5px 5px;
`;
