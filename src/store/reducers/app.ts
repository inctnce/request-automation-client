import initialState from "../states/app";
import Action from "../../types/Action";
import AppPage from "../../types/pages/AppPage";
import ACTION from "../ACTION";
import userLS from "../../localStorage/user";
import authLS from "../../localStorage/auth";
import didSetUserLS from "../../localStorage/didSetUser";

function app(state: AppPage = initialState, action: Action): AppPage {
  switch (action.type) {
    case ACTION.DID_SET_USER:
      didSetUserLS.set();
      return {
        ...state,
        didSetUser: true,
      };

    case ACTION.SET_USER:
      userLS.set(action.payload);
      authLS.set();
      return {
        ...state,
        isAuth: true,
        user: action.payload,
      };
    case ACTION.LOGOUT:
      userLS.remove();
      authLS.remove();
      didSetUserLS.remove();
      return {
        ...state,
        isAuth: false,
        didSetUser: false,
      };
    case ACTION.ALERT:
      return {
        ...state,
        alert: { ...action.payload },
      };
  }
  return state;
}

export default app;
