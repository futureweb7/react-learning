import React from 'react';
import CompOne from './CompOne';
import CompTwo from './CompTwo';
import HOC from './HOC';

const HocBord = () => {
    const tempStyle = {
        width: "400px",
        margin: "50px auto",
        background:"#8fbc8f",
        padding:" 15px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        }
        const NewCompOne = HOC(CompOne);
        const NewCompTwo = HOC(CompTwo);
    return (
        <div style={tempStyle}>
             <h1>react HOC example</h1>
           <NewCompOne />
           <NewCompTwo />
        </div>
    );
};

export default HocBord;