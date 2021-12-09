import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as searchBtn } from "../../assets/icons/searchBtn.svg";
import { ReactComponent as dropDown } from "../../assets/icons/drop_down.svg";
import profile from "../../assets/images/헬로퓨처.jpg";
import { useHistory, useNavigate } from "react-router";

const Header = () => {
  return (
    <StyledRoot>
      <StyledLeft>sopt.log</StyledLeft>
      <StyledRight>
        <img src={searchBtn} alt="" />
        <Link to="/write">
          <button>새 글 작성</button>
          {/* 이걸 누르면 write 페이지로 이동 */}
        </Link>
        <img src={profile} alt="Profile img" />
        <img src={dropDown} alt="" />
      </StyledRight>
    </StyledRoot>
  );
};

export default Header;

const StyledRoot = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 30px 100px 25px;
`;

const StyledLeft = styled.div`
  font-weight: bold;
  font-size: 30px;
  letter-spacing: -2px;
  cursor: pointer;
`;

const StyledRight = styled.div`
  display: flex;
  align-items: center;

  button {
    width: 97px;
    height: 32px;
    border-radius: 16px;
    font-weight: bolder;
    border: 1px solid #000;
    cursor: pointer;
    margin-left: 10px;
    font-size: 15px;
    background-color: whitesmoke;
  }

  button:hover {
    background-color: black;
    color: whitesmoke;
  }

  img {
    margin-left: 10px;
    cursor: pointer;
  }

  img:nth-child(1) {
    margin-left: 0;
  }

  img:nth-child(3) {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-left: 20px;
  }
`;
