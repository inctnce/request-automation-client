import initialState from "../states/app";
import Action from "../../types/Action";
import AppPage from "../../types/pages/AppPage";
import ACTION from "../ACTION";

function app(state: AppPage = initialState, action: Action): AppPage {
  switch (action.type) {
    case ACTION.SET_USER:
      return {
        ...state,
        isAuth: true,
        user: action.payload,
      };
    case ACTION.LOGOUT:
      return {
        ...state,
        isAuth: false,
      };
  }
  return state;
}

export default app;
