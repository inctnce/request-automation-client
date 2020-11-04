import Action from "../../types/Action";
import Header from "../../types/Header";
import ACTION from "../ACTION";
import iniitalState from "../states/header";

function header(state: Header = iniitalState, action: Action): Header {
  switch (action.type) {
    default:
      break;
  }

  return state;
}

export default header;
