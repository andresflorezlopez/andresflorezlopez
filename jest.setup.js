import "babel-polyfill";

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

jest.mock("./src/lib/app");

configure({
  adapter: new Adapter()
});