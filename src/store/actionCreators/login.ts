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

function setUser(user: User): Action {
  return { type: ACTION.SET_USER, payload: user };
}

const loginAC = {
  updForm: updForm,
  login: login,
  setUser: setUser,
};

export default loginAC;
