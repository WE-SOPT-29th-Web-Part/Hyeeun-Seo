import React from "react";
import { Link } from "react-router-dom";

const HomeNav = () => {
  return (
    <nav>
      <Link to="/">
        <button>글</button>
      </Link>
      <Link to="/series">
        <button>시리즈</button>
      </Link>
      {/*어떡하면 이동시킬 수 있는지 -> link 사용?*/}
    </nav>
  );
};

export default HomeNav;
