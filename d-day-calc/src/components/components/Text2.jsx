import React, { useState } from 'react';

const Text2 = ({year, month, date}) => {
    const [inputValue, setInputValue] = useState("");
    const [resultDate, setResultDate] = useState("yyyy년 mm월 dd일");

    const handleChange = (e) => {
        setInputValue(e.target.value);
        printDate(e.target.value);
    };

    const printDate = (value) => {
        const tempDate = new Date();
        tempDate.setFullYear(year);
        //year값을 받아와서 그것을 tempDate 객체로 넣어줌.
        tempDate.setMonth(Number(month) -1);
        tempDate.setDate(Number(date) - Number(value) -1);
        //임시적인 날짜를 만들고, 그 날짜를 가공하여 resultDate에 넣어주기
        const result = `${tempDate.getFullYear()}년 ${tempDate.getMonth()+1}월 ${tempDate.getDate()+1}일`;
        setResultDate(result);
    };

    return (
        <div className="text">
            <div>
                D-<input 
                    type="text"
                    value={inputValue}
                    onChange={handleChange}/>는?
            </div>
            <div>
                {resultDate}
            </div>
        </div>
    );
};

export default Text2;