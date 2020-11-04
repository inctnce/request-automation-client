import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import React from "react";
import style from "./style.module.css";
import Button from "@material-ui/core/Button";

type Props = {
  email_val: string;
  password_val: string;

  updForm: (key: number, value: string) => void;
  login: (email: string, password: string) => void;
};

const Login = (props: Props) => {
  const emailRef: React.RefObject<HTMLInputElement> = React.createRef();
  const passwordRef: React.RefObject<HTMLInputElement> = React.createRef();
  return (
    <Paper className={style.wrapper} variant="outlined">
      <Typography variant="h6" align="center">
        Вход
      </Typography>
      <TextField
        type="email"
        inputRef={emailRef}
        margin="normal"
        variant="outlined"
        label="Почта"
        value={props.email_val}
        onChange={() => props.updForm(1, emailRef.current!.value)}
      />
      <TextField
        type="password"
        inputRef={passwordRef}
        margin="normal"
        variant="outlined"
        label="Пароль"
        value={props.password_val}
        onChange={() => props.updForm(2, passwordRef.current!.value)}
      />
      <Button
        disableElevation
        variant="contained"
        color="primary"
        className={style.btn}
        onClick={() => props.login(props.email_val, props.password_val)}
      >
        Войти
      </Button>
    </Paper>
  );
};

export default Login;
