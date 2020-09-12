import React from "react";

// React Components
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Form from "./components/Form";

import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/pizza" component={Form} />
      </Switch>
    </>
  );
};

export default App;
