import initialState from "../states/account";
import Action from "../../types/Action";
import AccountPage from "../../types/pages/AccountPage";
import ACTION from "../ACTION";

function account(state: AccountPage = initialState, action: Action): AccountPage {
  const specs: string[] = state.product_form.specs;
  const settings: string[] = state.product_form.settings;
  switch (action.type) {
    case ACTION.SET_OPTION:
      return {
        ...state,
        selected_option: action.payload,
      };
    case ACTION.UPD_NUM_OF_ROWS:
      if (action.payload === "decrease" && specs.length > 1) {
        specs.pop();
        settings.pop();
      }
      if (action.payload === "increase") {
        specs.push("");
        settings.push("");
      }

      return {
        ...state,
        product_form: {
          ...state.product_form,
          specs: [...specs],
          settings: [...settings],
        },
      };

    case ACTION.UPD_PRODUCT_FORM:
      return {
        ...state,
        product_form: {
          ...state.product_form,
          category_id: action.payload.segment === "category" ? action.payload.value : state.product_form.category_id,
          name: action.payload.segment === "name" ? action.payload.value : state.product_form.name,
          extra_info: action.payload.segment === "extra_info" ? action.payload.value : state.product_form.extra_info,
          price: action.payload.segment === "price" ? action.payload.value : state.product_form.price,
        },
      };

    case ACTION.UPD_PRODUCT_FORM_TABLE:
      console.log(action.payload);

      if (action.payload.type === "spec") {
        specs[action.payload.index] = action.payload.value;
      }
      if (action.payload.type === "setting") {
        settings[action.payload.index] = action.payload.value;
      }

      return {
        ...state,
        product_form: {
          ...state.product_form,
          specs: [...specs],
          settings: [...settings],
        },
      };

    case ACTION.SET_PRODUCTS:
      return {
        ...state,
        didGetUserProducts: action.payload.forUser ? true : false,
        user_products: action.payload.forUser ? [...action.payload.products] : state.user_products,
      };

    case ACTION.SET_DEMANDS:
      return {
        ...state,
        didGetUserDemands: true,
        user_demands: [...action.payload],
      };
  }
  return state;
}

export default account;
