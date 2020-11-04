import Action from "../../types/Action";
import ACTION from "../ACTION";

function updFilter(value: string): Action {
  return {
    type: ACTION.UPD_FILTER,
    payload: value,
  };
}

const headerAC = {
  updFilter: updFilter,
};

export default headerAC;
