import React from 'react';
import HOC from "./HOC"
const buttons = {
    backgroundColor: "black",
    color: "white",
    fontSize: "20px",
    padding: "10px 60px",
    borderRadius: "5px",
    margin: '10px 0px',
    cursor: "pointer",
    } 


const CompTwo = ({increase, handleIncrease}) => {
    return (
        <div>
            <button onClick={handleIncrease} style={buttons}>increase your 🌸 <span>{increase}</span></button>
        </div>
    );
};
export default HOC(CompTwo);