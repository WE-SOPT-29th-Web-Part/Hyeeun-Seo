import React from 'react';
import styled from 'styled-components';

const NavBar = ({setView}) => {

    return (
        <Options>
            <button onClick={() => setView('today')}>오늘만 보기</button>
            <button onClick={() => setView('tomorrow')}>내일만 보기</button>
            <button onClick={() => setView('both')}>함께 보기</button>
        </Options>
    );
};

export default NavBar;

const Options = styled.nav`
    display: flex;
    justify-content: center; 
    margin: 10px 0;

    & > button {
        background-color: rgba(250, 141, 98, 0.671);
        border: 0;
        outline: 0;
        margin-right: 15px;
        cursor: pointer;
        color: white;
    }

    & > button:nth-child(3) {
        margin-right: 0;
    }
`;