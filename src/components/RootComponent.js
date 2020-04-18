import React from 'react';

import { HashRouter, Switch, Route } from "react-router-dom";

import Home from "./screens/Home";

const RootComponent = ({location, context}) => (
  <HashRouter location={location} context={context}>
      <Switch>
        <Route exact path="/dashboard" component={Home} />
      </Switch>
  </HashRouter>
);

export default RootComponent;