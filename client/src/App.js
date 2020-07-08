import React from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import Gift from "./Gift";
import Letter from "./Letter";
import Camera1 from "./Camera1";
import HappyBirthday from "./HappyBirthday";

function App() {
  return (
    <>
      <Route component={Home} path="/" exact />
      <Route component={Gift} path="/gift" exact />
      <Route component={Letter} path="/letter" />
      <Route component={Camera1} path="/Camera" />
      <Route component={HappyBirthday} path="/hbd" />
    </>
  );
}

export default App;
