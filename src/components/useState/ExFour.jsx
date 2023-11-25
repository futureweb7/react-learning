import React, { useState } from 'react';

const ExFour = () => {
    const [number, setNumber] = useState([]);
    console.log("🚀 ~ file: ExFour.jsx:6 ~ ExFour ~ number:", number)
    const colors =["violet","#788200","#ebd0ff","green","#CC5500","#FFC300","red",]    
    const [bg, setBg] = useState(false);
    const handleNumber = () => {
        setNumber([
            ...number,
            {
                id: number.length,
                number: Math.random() * 10,
            }
        ])
    }
    const handleBg = () => {
        setBg((prevState) => !prevState);
    }
    const olStyle= {
        maxHeight: "300px",
        overflow:"auto"
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
            <ol style={olStyle}>
                {number?.map((num,id) =>(
                  <li key={num.id} style={{ color: colors[id % colors.length] }}>{num.number}</li>
                ))}
            </ol>
            <button onClick={handleNumber}>add number</button>
            <button onClick={handleBg}>bg change</button>
        </div>
        </>
    );
};
export default ExFour;