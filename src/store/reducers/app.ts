import initialState from "../states/app";
import Action from "../../types/Action";
import AppPage from "../../types/pages/AppPage";

function app(state: AppPage = initialState, action: Action): AppPage {
  switch (action.type) {
    default:
      break;
  }
  return state;
}

export default app;
