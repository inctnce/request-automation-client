import Action from "../../types/Action";
import Category from "../../types/Category";
import ACTION from "../ACTION";

function setOption(selected_option: number): Action {
  return {
    type: ACTION.SET_OPTION,
    payload: selected_option,
  };
}

function updProductForm(
  segment: "category" | "table" | "other",
  key: number,
  value: string | Category
): Action {
  return {
    type: ACTION.UPD_PRODUCT_FORM,
    payload: {
      segment: segment,
      key: key,
      value: value,
    },
  };
}

function updProductFormTable(
  type: "spec" | "value",
  index: number,
  value: string
): Action {
  return {
    type: ACTION.UPD_PRODUCT_FORM_TABLE,
    payload: {
      type: type,
      index: index,
      value: value,
    },
  };
}

function updNumOfRows(action: "increase" | "decrease"): Action {
  return {
    type: ACTION.UPD_NUM_OF_ROWS,
    payload: action,
  };
}

const accountAC = {
  setOption: setOption,
  updNumOfRows: updNumOfRows,
  updProductForm: updProductForm,
  updProductFormTable: updProductFormTable,
};

export default accountAC;
