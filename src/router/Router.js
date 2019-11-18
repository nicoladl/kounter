import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import PersonPicker from "../components/PersonPicker";

const Router = (store) => (
  <HashRouter>
    <Switch>
      <Route path="/" exact component={PersonPicker}></Route>
      <Route path="/counter/:name" component={Dashboard} store={store}></Route>
    </Switch>
  </HashRouter>
);

export default Router;
