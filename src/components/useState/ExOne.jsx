import React, { useState } from 'react';

const ExOne = () => {
    const [text, setText] = useState("");
    const handleText = (e) => {
        setText(e.target.value);
        
    }
    return (
        <div>
            <p><i>if type (.js) show alert</i></p>
            <p>{text}</p>
            <input  type='text' value={text} onChange={handleText}/>
           <p>{text.includes(".js") ? alert("I am an alert box!") : text ? "right" : " "} </p>
        </div>
    );
};

export default ExOne;