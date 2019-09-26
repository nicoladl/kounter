import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import App from "../components/App";
import PersonPicker from "../components/PersonPicker";

const Router = () => (
  <HashRouter>
    <Switch>
      <Route path="/" exact component={PersonPicker}></Route>
      <Route path="/counter/:name" component={App}></Route>
    </Switch>
  </HashRouter>
);

export default Router;
