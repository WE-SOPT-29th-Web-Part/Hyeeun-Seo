import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';

const SearchBar = ({setUserInfo}) => {
    const [user, setUser] = useState("");
    const handleChange = (e) => {
        setUser(e.target.value);

};
    //이 값을 submit 했을 때, 검색이 되도록
    //input 태그를 form 태그로 감싸고, onSubmit 이벤트를 사용하는 것
    // 굳이 이렇게 하는 이유는 하나의 태그에 하나의 이벤트만 주기위해?
const handleSubmit = async (e) => {//submit를 하면 기본적으로 새로고침이 됨
    e.preventDefault();
    // user 값을 이용하여 정보를 받아오자.
    // 서버에 있는 데이터를 받아오는 방법 -> 온라인에 올라와있는 데이터를 받아오자.
    // 서버 통신이 필요하다. -> 서버 통신에는 받아오는데 시간이 걸린다. -> 비동기다 (예?)
    // 비동기 처리를 하기 위한 방법 -> async await
    // axios는 서버통신을 도와주는 툴
    // get은 받아온다는 의미, REST API의 한 종류

    const {data} = await axios.get(`https://api.github.com/users/${user}`);
    // 값을 동적으로 바꿔주고 싶을 때 setUser을 사용, 값 자체를 가져올 때는 user 사용?
    // 구조분해할당
    // 서버에서 받아온 데이터 중, data 프로퍼티를 data라는 이름으로 저장할게
    // 그럼 프로퍼티와 저장되는 이름은 항상 같은 건가요?
    setUserInfo(data);
};


    return (
        <form onSubmit={handleSubmit}>
            <Input 
                value={user} 
                onChange={handleChange}
                type="text" 
                placeholder= "Github 프로필을 검색해보세요."
            />
        </form>
    );
};

export default SearchBar;

const Input = styled.input`
    border: 8px solid rgba(105, 105, 105, 0.5);
    border-radius: 20px;
    outline: none;
    width: 320px;
    height: 57px;
    background-color: rgb(36,39,43);
    color: rgb(229,230,231);
    padding: 16px;
`;