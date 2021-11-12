import React from 'react';


const NavBar = ({setView}) => {

    return (
        <div>
            <button onClick={() => setView('today')}>오늘만 보기</button>
            <button onClick={() => setView('tomorrow')}>내일만 보기</button>
            <button onClick={() => setView('both')}>함께 보기</button>
        </div>
    );
};

export default NavBar;