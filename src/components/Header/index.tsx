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
import Menu from "@material-ui/core/Menu/Menu";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import MoreVert from "@material-ui/icons/MoreVert";
import IconButton from "@material-ui/core/IconButton/IconButton";
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon";
import ExitToApp from "@material-ui/icons/ExitToApp";
import Typography from "@material-ui/core/Typography/Typography";
import { AccountCircle, Dashboard, ShoppingBasket } from "@material-ui/icons";

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
    headerRoot: {
      borderBottom: "2px solid var(--light_level_3)",
    },
    toolbarRoot: {
      padding: "0 2.5vw !important",
    },
    optionsRoot: {
      display: "flex",
      flexGrow: 1,
    },
  })
);

type Props = {
  isAdmin: boolean;

  filter_value: string;
  updFilter: (value: string) => void;
  logout: () => void;
};

const Header = (props: Props) => {
  const classes = useStyles();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function HeaderLink(props: HeaderLinkProps) {
    return (
      <MyLink color="primary" onClick={() => history.push(props.url)}>
        {props.label}
      </MyLink>
    );
  }

  return (
    <AppBar className={classes.headerRoot} elevation={0} position="static" color="transparent">
      <Toolbar className={classes.toolbarRoot}>
        {!props.isAdmin ? (
          <>
            <Search className={style.search} value={props.filter_value} updFilter={props.updFilter} />
            {window.innerWidth > 600 ? (
              <>
                <span className={classes.optionsRoot}>
                  <HeaderLink label="Каталог" url="/" />
                  <HeaderLink label="Аккаунт" url="/account" />
                  <HeaderLink label="Корзина" url="/bag" />
                </span>
                <Button color="primary" variant="contained" disableElevation onClick={() => props.logout()}>
                  Выйти
                </Button>
              </>
            ) : (
              <div className={style.more_btn}>
                <IconButton className={style.more_btn} aria-haspopup="true" onClick={handleClick}>
                  <MoreVert />
                </IconButton>

                <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                  <MenuItem
                    onClick={() => {
                      setAnchorEl(null);
                      history.push("/");
                    }}
                  >
                    <ListItemIcon>
                      <Dashboard fontSize="small" />
                    </ListItemIcon>
                    <Typography variant="inherit">Каталог</Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      setAnchorEl(null);
                      history.push("/account");
                    }}
                  >
                    <ListItemIcon>
                      <AccountCircle fontSize="small" />
                    </ListItemIcon>
                    <Typography variant="inherit">Аккаунт</Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      setAnchorEl(null);
                      history.push("/bag");
                    }}
                  >
                    <ListItemIcon>
                      <ShoppingBasket fontSize="small" />
                    </ListItemIcon>
                    <Typography variant="inherit">Корзина</Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      setAnchorEl(null);
                      props.logout();
                    }}
                  >
                    <ListItemIcon>
                      <ExitToApp fontSize="small" />
                    </ListItemIcon>
                    <Typography variant="inherit">Выйти</Typography>
                  </MenuItem>
                </Menu>
              </div>
            )}
          </>
        ) : (
          <></>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
