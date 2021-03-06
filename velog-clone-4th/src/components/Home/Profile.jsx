import React from "react";
import styled from "styled-components";
import profileImg from "../../assets/images/헬로퓨처.jpg";
import { colors } from "../../libs/constants/colors";
import { ReactComponent as GithubIcon } from "../../assets/icons/github.svg";
import { ReactComponent as HomeIcon } from "../../assets/icons/home.svg";
import { ReactComponent as MailIcon } from "../../assets/icons/mail.svg";

const Profile = () => {
  return (
    <StyledRoot>
      <StyledProfile>
        <img src={profileImg} alt="profile" />
        <div>
          <h3>서혜은</h3>
          <h4>안녕하세요.</h4>
        </div>
      </StyledProfile>
      <StyledCenterLine></StyledCenterLine>
      <StyledContact>
        <a href="https://github.com/henization" target="blank">
          <GithubIcon fill="lightGray" />
        </a>
        <a href="https://blog.naver.com/shy6295" target="blank">
          <HomeIcon fill="lightGray" />
        </a>
        <a href="/">
          <MailIcon fill="lightGray" />
        </a>
      </StyledContact>
    </StyledRoot>
  );
};

export default Profile;

const StyledRoot = styled.section`
  margin: auto;
  margin-top: 90px;
  width: 100%;
`;

const StyledProfile = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 128px;
    height: 128px;
    border-radius: 50%;
    margin-right: 16px;
  }
  div {
    h3 {
      margin: 0;
      margin-bottom: 10px;
      font-size: 24px;
    }
    h4 {
      font-weight: normal;
      margin: 0;
      font-size: 18px;
      color: ${colors.lightGray};
    }
  }
`;

const StyledCenterLine = styled.div`
  background-color: rgb(233, 236, 239);
  width: 100%;
  height: 1px;
  margin-top: 32px;
  margin-bottom: 24px;
`;

const StyledContact = styled.div`
  & > a > svg {
    margin-right: 16px;
    &:hover {
      fill: ${colors.darkBlack};
    }
  }
`;
