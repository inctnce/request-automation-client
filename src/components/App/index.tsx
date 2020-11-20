import React from "react";
import { Redirect } from "react-router-dom";
import Alert from "@material-ui/lab/Alert";
import AlertT from "../../types/Alert";
import Content from "../Content";
import Header from "../Header/container";
import style from "./style.module.css";

type Props = {
  isAuth: boolean;
  isAdmin: boolean;
  alert: AlertT;

  didGetCategories: boolean;
  getCategories: () => void;

  didGetProducts: boolean;
  getProducts: () => void;
};

function App(props: Props) {
  const [isAlert, setAlert] = React.useState(false);

  React.useEffect(() => {
    if (props.alert.message) {
      setAlert(true);
      const interval = setTimeout(() => {
        setAlert(false);
      }, 3000);
      return () => clearTimeout(interval);
    }
  }, [props.alert.message]);

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
          {isAlert ? (
            <Alert className={style.alert} severity="error">
              {props.alert.message}
            </Alert>
          ) : (
            <></>
          )}
          <Content />
        </div>
      ) : (
        <Redirect to="/login" />
      )}
    </>
  );
}

export default App;
