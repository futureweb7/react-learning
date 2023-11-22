import React from 'react';

const TempInput = ({ scale, temperature, onTempChange }) => {
    const tempStyleInput = {
        border: "5px solid",
        borderImage: "linear-gradient(to right, darkblue, darkorchid) 1",
        marginTop: "20px",
        color: "#00008b",
    }
    const scaleNames = {
        c: "Celsius",
        f: "Fahrenheit"
      };

    return (
        <div>
            <fieldset style={tempStyleInput}>
                <legend>Enter temperature in {scaleNames[scale]} :</legend>
                <input  value={temperature} onChange={(e) => onTempChange(e.target.value)}/>
            </fieldset>
        </div>
    );
};

export default TempInput;