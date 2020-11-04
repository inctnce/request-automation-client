import React from "react";
import { Redirect } from "react-router-dom";
import Content from "../Content";
import Header from "../Header/container";
import style from "./style.module.css";

type Props = {
  isAuth: boolean;
  isAdmin: boolean;
};

function App(props: Props) {
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
