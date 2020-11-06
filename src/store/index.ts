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
import account from "./reducers/account";
import AccountPage from "../types/pages/AccountPage";
import catalog from "./reducers/catalog";
import CatalogPage from "../types/pages/CatalogPage";

import watchLogin from "./sagas/user/login";
import watchPostCategory from "./sagas/category/post";
import watchGetCategories from "./sagas/category/get";

const reducers = combineReducers({
  app: app,
  header: header,
  login: login,
  account: account,
  catalog: catalog,
});
const saga = createSagaMiddleware();
let store: Store<
  CombinedState<{
    app: AppPage;
    login: LoginPage;
    header: Header;
    account: AccountPage;
    catalog: CatalogPage;
  }>,
  Action
> = createStore(reducers, applyMiddleware(logger, saga));

saga.run(watchLogin);
saga.run(watchPostCategory);
saga.run(watchGetCategories);

export default store;
