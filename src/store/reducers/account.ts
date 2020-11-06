import initialState from "../states/account";
import Action from "../../types/Action";
import AccountPage from "../../types/pages/AccountPage";
import ACTION from "../ACTION";

function account(state: AccountPage = initialState, action: Action): AccountPage {
  switch (action.type) {
    case ACTION.SET_OPTION:
      return {
        ...state,
        selected_option: action.payload,
      };
  }
  return state;
}

export default account;
