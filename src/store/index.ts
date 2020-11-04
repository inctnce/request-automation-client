import { applyMiddleware, CombinedState, combineReducers, createStore, Store } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import Action from "../types/Action";

import app from "./reducers/app";
import AppPage from "../types/pages/AppPage";
import login from "./reducers/login";
import LoginPage from "../types/pages/LoginPage";

const reducers = combineReducers({
  app: app,
  login: login,
});
const saga = createSagaMiddleware();
let store: Store<
  CombinedState<{
    app: AppPage;
    login: LoginPage;
  }>,
  Action
> = createStore(reducers, applyMiddleware(logger, saga));

export default store;
