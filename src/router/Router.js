import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import PersonPicker from "../components/PersonPicker";

const Router = () => (
  <HashRouter>
    <Switch>
      <Route path="/" exact component={PersonPicker}></Route>
      <Route path="/counter/:name" component={Dashboard}></Route>
    </Switch>
  </HashRouter>
);

export default Router;
