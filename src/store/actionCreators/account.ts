import Action from "../../types/Action";
import ACTION from "../ACTION";

function setOption(selected_option: number): Action {
  return {
    type: ACTION.SET_OPTION,
    payload: selected_option,
  };
}

const accountAC = {
  setOption: setOption,
};

export default accountAC;
