import React, { useState } from 'react';

const Todos = ({dateType}) => {
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
        if (e.key === 'enter') addList();
    }

    const handleAddBtn = () => {
        addList();
    }

    return (
        <StyledSection>
            <h2>{dateType} 할 일</h2>
            <StyledTodoList>
                [...itemSet].map((item) => (
                <li key={item} id={item}>
                    <span>{item}</span>
                    <button onClick={handleDeleteBtn}></button>
                </li>
                ))
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