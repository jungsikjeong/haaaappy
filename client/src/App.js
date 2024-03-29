import React from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import Gift from "./Gift";
import Letter from "./Letter";
import Camera from "./Camera";
import HappyBirthday from "./HappyBirthday";
import { Helmet } from "react-helmet-async";

function App() {
  return (
    <>
      <Helmet>
        <title>happyDay</title>
      </Helmet>
      <Route component={Home} path="/" exact />
      <Route component={Gift} path="/gift" exact />
      <Route component={Letter} path="/letter" />
      <Route component={Camera} path="/Camera" />
      <Route component={HappyBirthday} path="/hbd" />
    </>
  );
}

export default App;
