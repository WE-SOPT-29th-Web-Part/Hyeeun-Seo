import React from 'react';
import styled from 'styled-components';

const Result = ({ userInfo, setUserInfo }) => {
    // 객체. <- 레퍼런스 타입. 참조타입. 값을 받아오는 것이 아니라, 주소를 받아온다.
    // 그래서 왜 userInfo가 빈 객체일 때를 못쓴다고?
    return userInfo.avatar_url ? (
        <Root>
            <button onClick={()=> setUserInfo({})}>닫기</button>
            <img src={userInfo.avatar_url} alt="" />
            <h3>{userInfo.name}</h3>
            <h4>{userInfo.login}</h4>
            <p>{userInfo.bio}</p>
            <a href={userInfo.html_url} target="_blank">Visit Github</a>
            <Ul>
                <li>
                    <strong>Followers</strong>
                    {userInfo.followers}
                </li>
                <li>
                    <strong>Following</strong>
                    {userInfo.following}
                </li>
                <li>
                    <strong>Repos</strong>
                    {userInfo.public_repos}
                </li>
            </Ul>
        </Root>
    ) : (
        <></>
        // 태그가 없는 태그. 명목상 구분자 역할을 하는 녀석.
    );
};

export default Result;

const Root = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    width: 390px;
    margin-top: 16px;
    background-color: rgb(44,48,53);
    border-radius: 20px;
    position: relative;
    animation: slideDown 400ms ease-in 0s 1 normal forwards;
    //transition (간단한 애니메이션을 구현할 때)
    // animation (세부적인 동작을 구현하고 싶을 때)
    // keyframes 정의
    @keyframes slideDown {
        0% {
            transform: translateY(-20px);
            opacity: 0;
        }
        100% {
            transform: translateY(0px);
            opacity: 1;
        }

    }

    //styled-components의 장점 - 중첩 스타일링이 가능
    // 자기 선택 문자 -> 근데... 이거... 아까랑 같은거 아님?
    & > button {
        position: absolute;
        top: 15px;
        right: 15px;
        width: 50px;
        height: 30px;
        background-color: rgb(36,39,43);
        color: white;
        outline: none;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    & > img {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        margin-top: 30px;
    }

    & > h3 {
        display: block;
        font-size: 24px;
        margin-top: 24px;
        font-weight: bold;
    }

    & > h4 {
        font-size: 14px;
        margin-top: 5px;
    }

    & > p {
        font-size: 16px;
        padding: 20px 45px;
        text-align: center;
    }

    & > a {
        text-decoration: none;
        color: gold;
        border: 1px solid gold;
        border-radius: 4px;
        padding: 8px;
        &:hover {
            color: rgb(44,48,53);
            background-color: gold;
        }
    }

    
`;

const Ul = styled.ul`
    display: flex;
    width: 100%;
    margin-top: 25px;
    & > li {
        width: 130px;
        height: 59px;
        background-color: rgb(36,39,43);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        line-height: 1.5;
        border-right: 5px solid rgb(44,48,53);
        border-left: 5px solid rgb(44,48,53);
        
        & > strong {
            font-weight: border;
        }
        &:nth-child(1) {
            border-left: none;
            border-bottom-left-radius: 20px;
        }
        &:nth-child(3) {
            border-right: none;
            border-bottom-right-radius: 20px;
        }
    }
`;

