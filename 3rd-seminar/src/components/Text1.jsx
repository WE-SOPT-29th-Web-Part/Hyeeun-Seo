import React from 'react';

const Text1 = ({year, month, date}) => {

    const [inputValue, setInputValue] = useState();
    const [resultValue, setResultDate] = useState("yyyy년 mm월 dd일");

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }
    return (
        <div className="text">
            <div className="text__left">
                <input type="text" value={inputValue || ""} onChange=<>/>
                일째 되는 날은?
            </div>
            <div>yyyy년 mm월 dd일</div>
        </div>
    );
};

export default Text1;