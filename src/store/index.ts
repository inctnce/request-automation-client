import { applyMiddleware, CombinedState, combineReducers, createStore, Store } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import Action from "../types/Action";

import app from "./reducers/app";
import AppPage from "../types/pages/AppPage";
import login from "./reducers/login";
import LoginPage from "../types/pages/LoginPage";
import header from "./reducers/header";
import Header from "../types/Header";

import watchLogin from "./sagas/user/login";

const reducers = combineReducers({
  app: app,
  header: header,
  login: login,
});
const saga = createSagaMiddleware();
let store: Store<
  CombinedState<{
    app: AppPage;
    login: LoginPage;
    header: Header;
  }>,
  Action
> = createStore(reducers, applyMiddleware(logger, saga));

saga.run(watchLogin);

export default store;
