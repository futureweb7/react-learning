import React, { useState } from 'react';

const ExThree = () => {
    const[count, setCount]=useState(0);
    const handleCount = () => {
        setCount((prevCount) => prevCount + 1);
    }
    return (
        <div>
            <span style={{color: "red", fontWeight: "bold"}}> {count}  </span>
            <span> <i>{count % 2 === 0 ? "IS EVENT NUMBER" : " IS ODD NUMBER" }</i></span>
            <br/>
            <button onClick={handleCount}>even / odd</button>
        </div>
    );
};

export default ExThree;