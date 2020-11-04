import React from "react";
import { useHistory } from "react-router-dom";
import Header from "../Header";
import Login from "../Login/container";
import style from "./style.module.css";

type Props = {
  isAuth: boolean;
  isAdmin: boolean;
};

function App(props: Props) {
  return (
    <div className={style.wrapper}>
      {props.isAuth ? (
        <>
          <Header />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
