import React, { useCallback, useMemo, useState } from 'react';
import Title from './Title';
import Button from './Button';

const darkStyle = {
    background:"#222",
    color: "#fafafa",
    border:"1px solid #fff",
    padding: "20px",
    width:"400px"
}
// const divStylw = {
//    display:"flex" ,
//    flexDirection: "column"
// } 
const ExOne = () => {
   const [count, setCount] = useState(0);
   const [count2, setCount2] = useState(0);

   const handleCountByOne = useCallback(() => {
        setCount((prevCount) => prevCount + 1);
    },[]);
   const handleCountByFive = useCallback( () => {
        setCount2((prevCount) => prevCount + 5);
     },[] );
     const isEvenOrOdd = useMemo(() => {
        let i = 0;
        while (i < 10) i +=1;
        return count % 2 === 0;
     },[count]);
     
    return (
       <div>
       <ul>
        <li> <b>memo</b> is a higher-order component which is used to create an optimized version of a component that is re-rendered only when props change</li>
        <li> <b>useMemo</b> is a hook which is used to cache the result of an expensive function inside a component, and only calls the expensive function when its dependencies change</li>
        <li><b>useCallback</b> is used to memoize callback functions, reducing unnecessary re-creation of functions and optimizing component re-renders.</li>
       </ul>
        <div style={darkStyle}>
            <Title title="counter one" count={count}/>
            <span><i>this count value is {isEvenOrOdd ? "even" : "odd"}</i></span>
            <Button handleClick={handleCountByOne}>increment by 1</Button>
            <hr/>
            <Title title="counter two" count={count2}/>
            <Button handleClick={handleCountByFive}>increment by 5</Button>
        </div>         
       </div>
    );
};

export default ExOne;