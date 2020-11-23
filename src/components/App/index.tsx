import React from "react";
import { Redirect } from "react-router-dom";
import Alert from "@material-ui/lab/Alert";
import AlertT from "../../types/Alert";
import Content from "../Content";
import Header from "../Header/container";
import style from "./style.module.css";
import Collapse from "@material-ui/core/Collapse";
import AlertTitle from "@material-ui/lab/AlertTitle/AlertTitle";

type Props = {
  isAuth: boolean;
  isAdmin: boolean;

  isAlert: boolean;
  alert: AlertT;

  didGetCategories: boolean;
  getCategories: () => void;

  didGetProducts: boolean;
  getProducts: () => void;

  cleanAlert: () => void;
};

function App(props: Props) {
  React.useEffect(() => {
    if (props.isAlert) {
      const interval = setTimeout(() => {
        props.cleanAlert();
      }, 3000);

      return () => clearTimeout(interval);
    }
  }, [props.isAlert]);

  if (props.isAuth) {
    if (!props.didGetCategories) {
      props.getCategories();
    }
    if (!props.didGetProducts) {
      props.getProducts();
    }
  }

  return (
    <>
      {props.isAuth ? (
        <div className={style.wrapper}>
          <Header />

          <Collapse in={props.isAlert}>
            <Alert className={style.alert} severity={props.alert.severity}>
              {props.alert.title ? (
                <AlertTitle>{props.alert.title}</AlertTitle>
              ) : (
                <></>
              )}
              {props.alert.message}
            </Alert>
          </Collapse>
          <Content />
        </div>
      ) : (
        <Redirect to="/login" />
      )}
    </>
  );
}

export default App;
