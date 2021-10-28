import React from 'react';

const Datainput = (props) => {
    // useEffect(() => {
    //     const [year, setYear] = userState(new Date().getFullYear());
    //     const [month, setMonth] = userState(new Date().getMonth()+1);
    //     const [date, setDate] = userState(new Date().getDate());

    // })
    
    // const handleChange = (e) => {
    //     setYear(e.target.value);
    // };

    const handleChange = (e, setState) => {
        setState(e.target.value);
    }

    return (
        <div id="dateInput">
            <button>오늘</button>
            <div>
                <input 
                    onChange={(e) => handleChange(e, setYear)} type="text" className="dateInput__input" value={year}/>년
                <input onChange={(e) => handleChange(e, setMonth)} type="text" className="dateInput__input" value={month}/>월
                <input onChange={(e) => handleChange(e, setDate)} type="text" className="dateInput__input" value={date}/>
                일을 기준으로
            </div>
        </div>
    );
};

export default Datainput;