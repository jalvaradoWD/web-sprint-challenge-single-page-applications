import React from "react";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </>
  );
};
export default App;
