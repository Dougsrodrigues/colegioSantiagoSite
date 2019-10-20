import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home/index";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
    </Switch>
  );
}
