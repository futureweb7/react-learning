import React from 'react';
import "./App.css"
// import TempBoard from './components/reactLiftingStateUp/TempBoard';
import HocBord from './components/hoc/HocBord';

const App = () => {
  const areaStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width:"100%",
    height:"100dvh"
    }
  return (
    <div style={areaStyle}>
      {/* <TempBoard/> */}
      <HocBord />
    </div>
  );
};

export default App;