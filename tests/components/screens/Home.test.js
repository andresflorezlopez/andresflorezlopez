import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";

import Home from '../../../src/components/screens/Home'

import App from '../../../src/lib/app';

beforeEach(() => {
  App.boot().withState();
});

describe("Home component", () => {
  test("snapshot renders", () => {
    const component = renderer.create(
      <Provider store={App.store.redux}>
        <Home />
      </Provider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});