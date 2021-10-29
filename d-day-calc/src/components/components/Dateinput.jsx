import React, { useState } from 'react';

const Dateinput = ({year, month, date, setYear, setMonth, setDate}) => {
//구조분해 할당 굉장히 중요해!
//input 값이 변화하면 그 값을 바로 year로 바꾸어주기
    
    const handleChange = (e, setState) => {
        setState(e.target.value);
    };

//버튼을 누르면 year, month, date에 오늘의 값 들어감
    const printToday = () => {
        //value year 에다가 useState 넣어주기
        const 
    }

    return (
        <div id="dateinput">
            <button onClick={printToday}>
                오늘
            </button>
            <div>
                <input 
                    type="text" 
                    value={year} 
                    onChange={(e) => handleChange(e, setYear)}
                />
                년{" "}
                <input 
                    type="text" 
                    value={month} 
                    onChange={(e) => handleChange(e, setMonth)}
                />
                월{" "}
                <input 
                    type="text" 
                    value={date} 
                    onChange={(e) => handleChange(e, setDate)}
                />
                일을 기준으로  
            </div>    
        </div>
    );
};

export default Dateinput;