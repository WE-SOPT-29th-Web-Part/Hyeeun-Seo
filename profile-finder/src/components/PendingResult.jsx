import React from 'react';
import styled from 'styled-components';

const PendingResult = () => {
    return <Root></Root>;
};

export default PendingResult;

const Root = styled.div`
    width: 50px;
    height: 50px;
    border: 5px solid gold;
    border-color: gold transparent transparent;
    border-radius: 50%;
    /* margin-top: 15px; */
    animation: spin 1s linear;

    @keyframes spin {
        100% {transform: rotate(360deg);}
    }
`;
