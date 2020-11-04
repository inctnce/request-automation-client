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
  }
  return state;
}

export default app;
