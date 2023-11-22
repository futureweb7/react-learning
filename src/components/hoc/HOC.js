import React, { useState } from 'react';

function HOC(OriginalComponent){
    function NewComponent(){
       const [increase,setIncrease] = useState(0);
       const handleIncrease = () => {
         setIncrease(prevValue => prevValue + 1);
       }
       return <OriginalComponent handleIncrease={handleIncrease} increase={increase} />
    }
    return NewComponent;
}
export default HOC;