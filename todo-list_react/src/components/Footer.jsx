import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <StyledFooter>
            Sopt 29th WEB Part
        </StyledFooter>
    );
};

export default Footer;

const StyledFooter = styled.div`
    width: 100%;
    background-color: rgba(101, 150, 61, 0.473);
    color: white;
    text-align: center;
    height: 50px;
    line-height: 50px;
`;