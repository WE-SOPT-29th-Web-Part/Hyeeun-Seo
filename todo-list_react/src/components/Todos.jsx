import React, { useState } from 'react';
import styled from 'styled-components';
import deleteBtn from '../assets/trash-can.svg';

const Todos = ({dateType, viewType}) => {
    const[todo, setTodo] = useState('');
    const[itemSet, setItemSet] = useState(new Set());

    const handleDeleteBtn = (e) => {
        const itemId = e.target.closest("li").id;
        setItemSet(new Set([...itemSet].filter((item) => item !== itemId)));
    }

    const handleChange = (e) => {
        setTodo(e.target.value);
    }

    const addList = () => {
        if (!todo) return;
        setItemSet((itemSet) => new Set([...itemSet, todo]));
        setTodo('');
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') addList();
    }

    const handleAddBtn = () => {
        addList();
    }

    return (
        <StyledSection className={viewType}>
            <h2>{dateType} 할 일</h2>
            <StyledTodoList>
                {itemSet &&
                    [...itemSet].map((item) => (
                        <li key={item} id={item}>
                            <span>{item}</span>
                            <button onClick={handleDeleteBtn}>
                            </button>
                        </li>
                    ))
                }
            </StyledTodoList>
            <StyledInput 
                type="text" 
                value={todo}
                onChange={handleChange}
                onKeyDown={handleKeyPress}
            />
            <StyledBtnWrapper>
                <button onClick={handleAddBtn}>+</button>
            </StyledBtnWrapper>
        </StyledSection>
    );
};

export default Todos;

const StyledSection = styled.section`
    display: flex;
    flex-direction:column;
    align-items: center;
    width: 0;
    visibility: hidden;
    transition: width 300ms ease-in;
    border-right: 1px solid lightslategray;

    & > h2 {
        font-weight: bold;
        font-size: 25px;
        padding-top: 10px;
        padding-bottom: 10px;
    }

    &.open {
        width: 100%;
        visibility: visible;
        transition: width 300ms ease-in;
    }
`;

const StyledTodoList = styled.ul`
    margin: 0;
    width: 100%;
    flex-grow: 1;
    padding: 0 20px;

    li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        border-bottom: 1px solid lightgray;
        padding: 0 20px;

        & > span {
            display: inline-block;
            height: 35px;
            line-height: 35px;
            display: inline-block;
            height: 35px;
            line-height: 35px;
        }

        & > button {
            background: transparent url()(${deleteBtn});
            border: 0;
            outline: 0;
            cursor: pointer;
        }

    }

`;

const StyledInput = styled.input`
    width: 100%;
    outline: 0;
    border: 0;
    width: 100%;
    border: 0;
    outline: 0;
`;

const StyledBtnWrapper  = styled.div`
    width: 100%;
    text-align: center;
    cursor: pointer;
`;
