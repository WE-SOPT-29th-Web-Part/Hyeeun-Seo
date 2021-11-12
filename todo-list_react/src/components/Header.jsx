import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
        <StyledHeader>
            To Do List
        </StyledHeader>
    );
};

export default Header;

const StyledHeader = styled.div`
    width: 100%;
    background-color: rgba(176, 255, 111, 0.473);
    color: white;
    text-align: center;
    height: 50px;
    line-height: 50px;
    font-size: 32px;
    font-weight: bold;
`;