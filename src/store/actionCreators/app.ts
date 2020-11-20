import Action from "../../types/Action";
import Alert from "../../types/Alert";
import ACTION from "../ACTION";

function alert(alert: Alert): Action {
  return {
    type: ACTION.ALERT,
    payload: alert,
  };
}

const appAC = {
  alert: alert,
};

export default appAC;
