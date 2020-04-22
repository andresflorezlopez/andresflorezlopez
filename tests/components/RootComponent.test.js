import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import RootComponent from '../../src/components/RootComponent';

import App from '../../src/lib/app';

beforeEach(() => {
  App.boot().withState();
});

describe("RootComponent component", () => {
  test("snapshot renders", () => {
    const component = renderer.create(
      <Provider store={App.store.redux}>
        <RootComponent />
      </Provider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});