import React, { useState } from 'react';

const Input = (props) => {
    const InputStyle = {
        display:"flex",
        flexDirection:"column",
    }
    const [input, setInput] = useState("");
    const handleInput = (e) => {
        setInput(e.target.value);
    }
    return (
        <div style={InputStyle}>
            <input type='text' value={input} onChange={handleInput} placeholder={props.placeholder}/>
            {props.renderProps(input)}
        </div>
    );
};

export default Input;