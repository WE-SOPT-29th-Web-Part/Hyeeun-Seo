import React, { useState } from 'react';

const Dateinput = ({year, month, date, setYear, setMonth, setDate}) => {
//구조분해 할당 갱장히 중요해!
//input 값이 변화하면 그 값을 바로 year로 바꾸어주기
    
    const handleChange = (e, setState) => {
        setState(e.target.value);
    };

    return (
        <div id="dateinput">
            <button>오늘</button>
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