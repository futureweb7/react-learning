import React from 'react';
import "./App.css"
// import ExFour from './components/useState/ExFour';
import ExOne from './components/callBackMemo/exOne/ExOne';
// import TempBoard from './components/reactLiftingStateUp/TempBoard';
// import HocBord from './components/hoc/HocBord';
// import AllUserList from './components/hocLoader/AllUserList';
// import RenderPropsEx from './components/renderProps/RenderPropsEx';
// import ExOne from './components/useState/ExOne';
// import ExTwo from './components/useState/ExTwo';

const App = () => {
  const areaStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width:"100%",
    height:"100dvh",
    flexDirection: "column"
    }
  return (
    <div style={areaStyle}>
      {/* <TempBoard/> */}
      {/* <HocBord /> */}
      {/* <AllUserList/> */}
      {/* <RenderPropsEx/> */}
      {/* <ExOne /> */}
      {/* <ExThree/> */}
      {/* <ExTwo/> */}
      {/* <ExFour/> */}
      <ExOne/>
    </div>
  );
};

export default App;