import React from "react";
import { Redirect } from "react-router-dom";
import Content from "../Content";
import Header from "../Header/container";
import style from "./style.module.css";

type Props = {
  isAuth: boolean;
  isAdmin: boolean;

  didGetCategories: boolean;
  getCategories: () => void;

  didGetProducts: boolean;
  getProducts: () => void;
};

function App(props: Props) {
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
          <Content />
        </div>
      ) : (
        <Redirect to="/login" />
      )}
    </>
  );
}

export default App;
