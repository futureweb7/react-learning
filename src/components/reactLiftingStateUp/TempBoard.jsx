import React, { useState } from 'react';
import TempInput from './TempInput';
import TempStatus from './TempStatus';
import { toCelsius, toFahrenheit, tryConvert } from "./tryConvert"

const TempBoard = () => {
    const tempStyle = {
        width: "400px",
        margin: "0 auto"
    }
    const [temperature, setTemperature] = useState();
    const [scale, setScale] = useState("c");
    
    const handleTempChange = (value, scale) => {
        setTemperature(value);
        setScale(scale);
      };
    const celsius = scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;
    
    return (
        <div style={tempStyle}>
            <TempInput
                scale="c"
                temperature={celsius}
                onTempChange={(value) => handleTempChange(value, "c")}
             />
            <TempInput
                scale="f"
                temperature={fahrenheit}
                onTempChange={(value) => handleTempChange(value, "f")}
             />
            <TempStatus celsius={parseFloat(celsius)} />
        </div>
    );
};

export default TempBoard;