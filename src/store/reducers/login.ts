import Action from "../../types/Action";
import LoginPage from "../../types/pages/LoginPage";
import ACTION from "../ACTION";
import initialState from "../states/login";

function login(state: LoginPage = initialState, action: Action): LoginPage {
  switch (action.type) {
    case ACTION.UPD_LOGIN_FORM:
      return {
        ...state,
        email_val:
          action.payload.key === 1 ? action.payload.value : state.email_val,
        password_val:
          action.payload.key === 2 ? action.payload.value : state.password_val,
      };

    default:
      break;
  }

  return state;
}

export default login;
