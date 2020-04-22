import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import { reducer as characters } from "./characters";

const rootReducer = history => {
  const reducers = {
    router: connectRouter(history),
    characters
  };
  return combineReducers(reducers);
};

export default rootReducer;