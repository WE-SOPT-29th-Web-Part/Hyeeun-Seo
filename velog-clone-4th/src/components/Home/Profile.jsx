import React from "react";
import profile from "../../assets/images/헬로퓨처.jpg";
import accountBtn from "../../assets/icons/account_circle.svg";
import homeBtn from "../../assets/icons/home.svg";
import favoriteBtn from "../../assets/icons/favorite.svg";

<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
></link>;

const Profile = () => {
  return (
    <div>
      <section>
        <div>
          <img src={profile} alt="Profile img" />
        </div>
        <div>
          <div>서혜은</div>
          <div>응애입니다 뿡</div>
        </div>
      </section>
      <div>
        <img src={accountBtn} alt="계정 버튼" />
        <img src={homeBtn} alt="홈 버튼" />
        <img src={favoriteBtn} alt="좋아요 버튼" />
      </div>
    </div>
  );
};

export default Profile;
