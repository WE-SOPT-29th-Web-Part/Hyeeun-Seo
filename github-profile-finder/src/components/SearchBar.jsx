import React, { useState } from 'react';
import styled from 'styled-components';

const SearchBar = () => {
    const [user, setUser] = useState();
    return (
        <div>
            <Input type="text" />
        </div>
    );
};

export default SearchBar;

const Input = styled.input`
    width:320px;
    height: 57px;
    padding: 16px;
    color: rgb(229,230,231);
`;