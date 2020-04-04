import React from 'react';

import { HashRouter, Switch, Route } from "react-router-dom";

import App from "./App";
import Home from "./screens/home";
import About from "./screens/about";

import Header from "./ui/header/Header";

import * as Tags from "./RootComponent.styled";

const RootComponent = ({location, context}) => (
  <HashRouter location={location} context={context}>
    <Tags.MainContainer>
      <Header />
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/dashboard" component={Home} />
        <Route exact path="/about" component={About} />
      </Switch>
    </Tags.MainContainer>
  </HashRouter>
);

export default RootComponent;