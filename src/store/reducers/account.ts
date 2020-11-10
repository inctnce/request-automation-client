import initialState from "../states/account";
import Action from "../../types/Action";
import AccountPage from "../../types/pages/AccountPage";
import ACTION from "../ACTION";

function account(
  state: AccountPage = initialState,
  action: Action
): AccountPage {
  switch (action.type) {
    case ACTION.SET_OPTION:
      return {
        ...state,
        selected_option: action.payload,
      };
    case ACTION.UPD_NUM_OF_ROWS:
      if (action.payload === "increase") {
        state.product_form.num_of_rows++;
        state.product_form.specs.push({ spec: "", value: "" });
      } else {
        if (state.product_form.num_of_rows > 1) {
          state.product_form.num_of_rows--;
          state.product_form.specs.pop();
        }
      }

      return {
        ...state,
      };
    case ACTION.UPD_PRODUCT_FORM:
      return {
        ...state,
      };
  }
  return state;
}

export default account;
