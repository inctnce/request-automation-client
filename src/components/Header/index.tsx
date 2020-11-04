import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import React from "react";
import style from "./style.module.css";

import { useHistory } from "react-router-dom";
import styled from "@material-ui/core/styles/styled";
import Search from "../Reusable/Search";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { createStyles, Theme } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

type HeaderLinkProps = {
  label: string;
  url: string;
};

const MyLink = styled(Button)({
  marginLeft: 16,
  fontWeight: "bold",
});

const useStyles = makeStyles((_theme: Theme) =>
  createStyles({
    headerRoot: { borderBottom: "2px solid var(--light_level_3)" },
    logButtonRoot: {
      display: "flex",
      flexGrow: 1,
    },
  })
);

type Props = {
  filter_value: string;
  updFilter: (value: string) => void;
  logout: () => void;
};

const Header = (props: Props) => {
  const classes = useStyles();
  const history = useHistory();

  function HeaderLink(props: HeaderLinkProps) {
    return (
      <MyLink color="primary" onClick={() => history.push(props.url)}>
        {props.label}
      </MyLink>
    );
  }

  return (
    <AppBar className={classes.headerRoot} elevation={0} position="static" color="transparent">
      <Toolbar>
        <span className={classes.logButtonRoot}>
          <Search value={props.filter_value} updFilter={props.updFilter} />
          <HeaderLink label="Каталог" url="/" />
          <HeaderLink label="Аккаунт" url="/account" />
          <HeaderLink label="Корзина" url="/bag" />
        </span>
        <Button color="primary" variant="contained" disableElevation onClick={() => props.logout()}>
          Выйти
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
