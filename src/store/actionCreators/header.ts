import Action from "../../types/Action";
import ACTION from "../ACTION";

function updFilter(value: string): Action {
  return {
    type: ACTION.UPD_FILTER,
    payload: value,
  };
}

function logout(): Action {
  return {
    type: ACTION.LOGOUT,
  };
}

const headerAC = {
  updFilter: updFilter,
  logout: logout,
};

export default headerAC;
