import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./utils/reportWebVitals";
import "./index.css";

import App from "./components/App/container";
import Login from "./components/Login/container";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

import { ThemeProvider } from "@material-ui/core";
import Theme from "./assets/Theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/login" component={() => <Login />} />
            <Route path="/" component={() => <App />} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
