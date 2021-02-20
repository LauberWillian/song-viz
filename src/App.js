import React from "react";
// import FunctionCont from "./components/functionCont";
// import Visualizer from "./components/Visualizer";
import Canvas from "./components/Circle";
import CircleFunc from "./components/CircleFunc";
import SpaceForce from "./components/SpaceForce";
import NewSpaceForce from "./components/SpaceForceNew";
function App() {
  return (
    <div>
      {/* <FunctionCont /> */}
      {/* <Visualizer /> */}
      {/* <CircleFunc /> */}
      {/* <SpaceForce /> */}
      <NewSpaceForce
        bars={60}
        bar_width={10}
        fftSizeValue={2048}
        barColor={"blue"}
        RMSMultiplier={1}
        baseRadiusValue={10}
        barHeightValue={0.3}
      />
      {/* <Canvas /> */}
    </div>
  );
}

export default App;
