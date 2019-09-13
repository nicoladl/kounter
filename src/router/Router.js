import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from "../components/App";
import NamePicker from "../components/NamePicker";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={NamePicker}></Route>
      <Route path="/counter/:name" component={App}></Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
