import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from "../components/App";
import PersonPicker from "../components/PersonPicker";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={PersonPicker}></Route>
      <Route path="/counter/:name" component={App}></Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
