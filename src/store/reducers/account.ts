import initialState from "../states/account";
import Action from "../../types/Action";
import AccountPage from "../../types/pages/AccountPage";
import ACTION from "../ACTION";
import Specification from "../../types/Specification";

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
      return {
        ...state,
        product_form: {
          ...state.product_form,
          specs:
            action.payload === "increase"
              ? [...state.product_form.specs, { spec: "", value: "" }]
              : [
                  ...state.product_form.specs.splice(
                    state.product_form.specs.length - 1,
                    1
                  ),
                ],
        },
      };
    case ACTION.UPD_PRODUCT_FORM:
      return {
        ...state,
        product_form: {
          ...state.product_form,
          selected_category:
            action.payload.segment === "category"
              ? action.payload.value
              : state.product_form.selected_category,
          name:
            action.payload.segment === "other"
              ? action.payload.key === 0
                ? action.payload.value
                : state.product_form.name
              : state.product_form.name,
          price:
            action.payload.segment === "other"
              ? action.payload.key === 1
                ? action.payload.value
                : state.product_form.price
              : state.product_form.price,
          extra_info:
            action.payload.segment === "other"
              ? action.payload.key === 2
                ? action.payload.value
                : state.product_form.extra_info
              : state.product_form.extra_info,
        },
      };
    case ACTION.UPD_PRODUCT_FORM_TABLE:
      let value: Specification = {
        spec: state.product_form.specs[action.payload.index].spec,
        value: state.product_form.specs[action.payload.index].value,
      };
      action.payload.type === "spec"
        ? (value.spec = action.payload.value)
        : (value.value = action.payload.value);

      state.product_form.specs[action.payload.index] = value;

      return {
        ...state,
        product_form: {
          ...state.product_form,
          specs: [...state.product_form.specs],
        },
      };
  }
  return state;
}

export default account;
