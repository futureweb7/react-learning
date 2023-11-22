import React from 'react';
import CompOne from './CompOne';
import CompTwo from './CompTwo';

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
    return (
        <div style={tempStyle}>
             <h1>react HOC example</h1>
           <CompOne />
           <CompTwo />
        </div>
    );
};

export default HocBord;