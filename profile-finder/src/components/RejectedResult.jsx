import React from 'react';
import styled from 'styled-components';

const RejectedResult = () => {
    return (
        <Root>
            사용자가 없습니다.
        </Root>
    );
};

export default RejectedResult;

const Root = styled.div`
    color: white;
    font-size: 17px;
    margin-top: 10px;
    font-weight: lighter;
`;