import React from 'react';
import Input from './Input';
// A prop in a component which is a function and that return a JSX
const RenderPropsEx = () => {
    const propsStyle={
        border:"1px solid #222",
        padding: "20px"
    }
    const textInput =(value) =>  <p>you type: <span style={{color:"red"}}>{value}</span></p>; 
    const multiplyInput = (value) =><p>you multiply with 2 and get : <span style={{color:"red"}}>  {value * 2} </span></p>
    return (
        <div style={propsStyle}>
            <h3>React  render props example</h3>
            <Input renderProps = { textInput } placeholder="type your text"/>
            <Input renderProps = { multiplyInput } placeholder="only number"/>
        </div>
    );
};

export default RenderPropsEx;