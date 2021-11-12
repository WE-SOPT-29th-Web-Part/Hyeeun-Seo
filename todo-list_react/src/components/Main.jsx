import React from 'react';
import styled from 'styled-components';
import Todos from './Todos';

const Main = ({ view }) => {
    switch (view) {
        case 'today':
            return (
                <StyledMain>
                    <Todos dateType={'오늘'} viewType='visible' />
                    <Todos dateType={'내일'} />
                </StyledMain>
            );
        case 'tomorrow':
            return (
                <StyledMain>
                    <Todos dateType={'오늘'} />
                    <Todos dateType={'내일'} viewType='visible' />
                </StyledMain>
            );
        case 'both':
        default:
            return (
                <StyledMain>
                    <Todos dateType={'오늘'} viewType='visible' />
                    <Todos dateType={'내일'} viewType='visible' />
                </StyledMain>
            );

    }
    
};

export default Main;