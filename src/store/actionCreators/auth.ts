import Action from "../../types/Action";
import User from "../../types/User";
import ACTION from "../ACTION";

function updForm(key: number, value: string): Action {
  return {
    type: ACTION.UPD_LOGIN_FORM,
    payload: {
      key: key,
      value: value,
    },
  };
}

function login(email: string, password: string): Action {
  return {
    type: ACTION.LOGIN,
    payload: {
      email: email,
      password: password,
    },
  };
}

function logout(): Action {
  return {
    type: ACTION.LOGOUT,
  };
}

function setUser(user: User): Action {
  return { type: ACTION.SET_USER, payload: user };
}

function refreshToken(token: string): Action {
  return {
    type: ACTION.REFRESH_TOKEN,
    payload: token,
  };
}

function setAccessToken(token: string): Action {
  return {
    type: ACTION.SET_ACCESS_TOKEN,
    payload: token,
  };
}

function handleLoginButton(): Action {
  return {
    type: ACTION.DID_SET_USER,
  };
}

const authAC = {
  updForm: updForm,

  login: login,
  logout: logout,

  setUser: setUser,
  updateToken: refreshToken,
  setAccessToken: setAccessToken,

  handleLoginButton: handleLoginButton,
};

export default authAC;
