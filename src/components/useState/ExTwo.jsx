import React, { useState } from 'react';
import ExThree from './ExThree';

const ExTwo = () => {
    const [text, setText] = useState(false);
    const [bg, setBg] = useState(false);
    const handleText = () => {
        setText((prevState) => !prevState);
    }
    const handleBg = () => {
        setBg((prevState) => !prevState);
    }
    const darkStyle = {
        background:"#222",
        color: "#fafafa",
        border:"1px solid #fff",
        padding: "20px",
        width:"400px"
    }    
    const whiteStyle = {
        background:"#fff",
        color: "#222",
        border:"1px solid #222",
        padding: "20px",
        width:"400px"
    }
    const toggleBg = bg ? darkStyle : whiteStyle;

    return (
        <>
        <div style={toggleBg}>
        <ExThree/>
             <h1><i>{text ? "update text" : "initial text"}</i></h1>
            <button onClick={handleText}>text change</button>
            <button onClick={handleBg}>bg change</button>
        </div>
        </>
    );
};

export default ExTwo;