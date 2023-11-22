import React from 'react';
import hot from "../../assets/hot.png"
import cool from "../../assets/cool.png"

const TempStatus = ({ celsius }) => {
  const tempStatusStyle = {
    width: "100%",
    borderBottom: "5px solid #00008b",
  }
    return (
        <div>
           {
            celsius>=100 ?
             <img src={hot} alt='' style={tempStatusStyle}/> 
            :<img src={cool} alt='' style={tempStatusStyle}/>
           }
        </div>
    );
};

export default TempStatus;