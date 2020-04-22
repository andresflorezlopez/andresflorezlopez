import { createBrowserHistory } from "history";
import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { routerMiddleware } from "connected-react-router";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";

import rootReducer from "../../redux/reducers/index";
import rootSaga from "../../redux/sagas/index";

const persistConfig = {
  key: "root",
  storage,
  blackList: [],
};

export const history = createBrowserHistory();

const persistedReducer = persistReducer(persistConfig, rootReducer(history));

export default class StoreLoader {
  static boot(App) {
    const sagaMiddleware = createSagaMiddleware();
    const initialState = {};
    const store = createStore(
      persistedReducer,
      initialState,
      compose(applyMiddleware(routerMiddleware(history), sagaMiddleware))
    );
    const persistor = persistStore(store);
    sagaMiddleware.run(rootSaga);
    App.redux = {
      store,
      persistor,
      history
    };
    return Promise.resolve({
      store,
      persistor,
      history
    });
  }
}