import Action from "../../types/Action";
import Header from "../../types/Header";

import initialState from "../states/header";

function header(state: Header = initialState, action: Action): Header {
  switch (action.type) {
    default:
      break;
  }

  return state;
}

export default header;
