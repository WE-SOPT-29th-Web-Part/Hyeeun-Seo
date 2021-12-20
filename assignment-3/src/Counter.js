import React from 'react';

const Counter = ({ countName }) => {
    // 구조분해할당 (deconstructing)
    // countName이라는 props를 받아올게
    // App.js -> Counter.js로 데이터를 넘겨주는 방식
    return (
        <div>
        {countName}
        </div>
    );
};

export default Counter;
//함수형 컴포넌트를 외부에서 사용할 수 있도록