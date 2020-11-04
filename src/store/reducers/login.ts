import Action from "../../types/Action";
import LoginPage from "../../types/pages/LoginPage";
import ACTION from "../ACTION";
import iniitalState from "../states/login";

function login(state: LoginPage = iniitalState, action: Action): LoginPage {
  switch (action.type) {
    case ACTION.UPD_LOGIN_FORM:
      return {
        ...state,
        email_val: action.payload.key === 1 ? action.payload.value : state.email_val,
        passwpord_val: action.payload.key === 2 ? action.payload.value : state.passwpord_val,
      };
    // case ACTION.SET_USER:
    //   return {
    //     ...state,
    //     email_val: "",
    //     passwpord_val: "",
    //   };

    default:
      break;
  }

  return state;
}

export default login;
