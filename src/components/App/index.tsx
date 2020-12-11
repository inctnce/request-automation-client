import React from "react";
import { Redirect } from "react-router-dom";
import Alert from "@material-ui/lab/Alert";
import AlertT from "../../types/Alert";
import Content from "../Content";
import Header from "../Header/container";
import style from "./style.module.css";
import Collapse from "@material-ui/core/Collapse";
import AlertTitle from "@material-ui/lab/AlertTitle/AlertTitle";
import Category from "../../types/Category";
import User from "../../types/User";

type Props = {
  user: User | undefined;

  isAlert: boolean;
  alert: AlertT;

  didGetCategories: boolean;
  getCategories: () => void;
  selectCategory: (category: Category) => void;

  firstCategory?: Category;

  cleanAlert: () => void;

  updateToken: (refreshToken: string) => void;
};

function App(props: Props) {
  React.useEffect(() => {
    if (props.user) {
      props.updateToken(props.user.refreshToken!);

      const refreshTokenInterval = setInterval(() => {
        props.updateToken(props.user!.refreshToken!);
      }, 600001);

      return () => clearInterval(refreshTokenInterval);
    }
  });

  React.useEffect(() => {
    if (props.isAlert) {
      const timeout = setTimeout(() => {
        props.cleanAlert();
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [props, props.isAlert]);

  if (props.user) {
    if (!props.didGetCategories) props.getCategories();
  }

  return (
    <>
      {props.user ? (
        <div className={style.wrapper}>
          <Header />

          <Collapse in={props.isAlert}>
            <Alert className={style.alert} severity={props.alert.severity}>
              {props.alert.title ? <AlertTitle>{props.alert.title}</AlertTitle> : <></>}
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
