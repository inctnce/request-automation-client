import AppBar from "@material-ui/core/AppBar/AppBar";
import Link from "@material-ui/core/Link";
import Toolbar from "@material-ui/core/Toolbar";
import React from "react";
import style from "./style.module.css";

import { useHistory } from "react-router-dom";
import styled from "@material-ui/core/styles/styled";

type HeaderLinkProps = {
  label: string;
  url: string;
};

const MyLink = styled(Link)({
  marginRight: 8,
});

const Header = () => {
  const history = useHistory();

  function HeaderLink(props: HeaderLinkProps) {
    return (
      <MyLink
        className={style.link}
        color="initial"
        underline="none"
        onClick={() => history.push(props.url)}
      >
        {props.label}
      </MyLink>
    );
  }

  return (
    <AppBar position="fixed">
      <Toolbar>
        <HeaderLink label="Каталог" url="/" />
        <HeaderLink label="Аккаунт" url="/account" />
        <HeaderLink label="Корзина" url="/bag" />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
