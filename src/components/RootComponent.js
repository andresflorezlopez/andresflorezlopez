import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import App from "./App";

const RootComponent = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App} />
      </Switch>
    </div>
  </Router>
);

export default RootComponent;