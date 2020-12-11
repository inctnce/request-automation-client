import initialState from "../states/app";
import Action from "../../types/Action";
import AppPage from "../../types/pages/AppPage";
import ACTION from "../ACTION";
import userLS from "../../localStorage/user";
import User from "../../types/User";

function app(state: AppPage = initialState, action: Action): AppPage {
  switch (action.type) {
    case ACTION.DID_SET_USER:
      return {
        ...state,
      };

    case ACTION.SET_USER:
      userLS.set(action.payload);
      return {
        ...state,
        user: action.payload,
      };
    case ACTION.LOGOUT:
      userLS.remove();
      return {
        ...state,
        user: undefined,
      };

    case ACTION.SET_ACCESS_TOKEN:
      const user: User = userLS.get()!;
      user!.accessToken = action.payload;
      userLS.set(user);
      return {
        ...state,
        user: { ...user },
      };

    case ACTION.ALERT:
      return {
        ...state,
        isAlert: true,
        alert: action.payload,
      };
    case ACTION.CLEAN_ALERT:
      return {
        ...state,
        isAlert: false,
      };
  }
  return state;
}

export default app;
