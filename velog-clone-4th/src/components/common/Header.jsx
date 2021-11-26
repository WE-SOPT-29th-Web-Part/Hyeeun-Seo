import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import searchBtn from "../../assets/icons/searchBtn.svg";

const Header = () => {
  return (
    <StyledHeader>
      <StyledLeft>sopt.log</StyledLeft>
      <StyledRight>
        <img src={searchBtn} alt="" />
        <Link to="/write">
          <button>새 글 작성</button>
          {/* 이걸 누르면 write 페이지로 이동 */}
        </Link>
      </StyledRight>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledLeft = styled.div`
  font-weight: bold;
  font-size: 30px;
  letter-spacing: -2px;
`;

const StyledRight = styled.div`
  & > button {
    padding: 15px 30px;
  }
`;
