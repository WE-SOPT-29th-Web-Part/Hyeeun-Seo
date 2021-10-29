import React from 'react';

const Dateinput = () => {
    return (
        <div id="dateinput">
            <button>오늘</button>
            <div>
                <input type="text" />년<input type="text" />월
                <input type="text" />일을 기준으로  
            </div>    
        </div>
    );
};

export default Dateinput;