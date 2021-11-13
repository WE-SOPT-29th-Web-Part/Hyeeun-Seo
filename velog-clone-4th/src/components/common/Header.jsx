import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <StyledHeader>
            <StyledLeft>sopt.log</StyledLeft>
            <StyledRight>
                <Link to="/write">
                    <button>새 글 작성</button>
                    {/* 이걸 누르면 write 페이지로 이동 */}
                </Link>
            </StyledRight>
        </StyledHeader>
    );
};

export default Header;

const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
`;

const StyledLeft = styled.div`
    font-weight: bold;
    font-size: 30px;
`;

const StyledRight = styled.div`
    
    Link {

    
        & > button {
            padding: 15px 30px;
        }
    }
    
`;