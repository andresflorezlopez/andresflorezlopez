import React, { useState, useEffect } from 'react';
import { HashRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import App from "../lib/app";

import Home from "./screens/Home";


const RootComponent = ({location, context}) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    App.boot().then(() => {
      setIsReady(true);
    });
  }, []);

  if (!isReady) {
    return <div>Loading</div>;
  }

  return (
    <Provider store={App.redux.store}>
      <HashRouter location={location} context={context}>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </HashRouter>
    </Provider>
  )
};

export default RootComponent;