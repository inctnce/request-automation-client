import Action from "../../types/Action";
import Demand from "../../types/Demand";
import Product from "../../types/Product";
import ACTION from "../ACTION";

function addToBag(product: Product): Action {
  return {
    type: ACTION.ADD_TO_BAG,
    payload: product,
  };
}

function removeFromBag(product: Product): Action {
  return {
    type: ACTION.REMOVE_FROM_BAG,
    payload: product,
  };
}

function postDemand(demand: Demand): Action {
  return {
    type: ACTION.POST_DEMAND,
    payload: demand,
  };
}

function updForm(key: number, value: string): Action {
  return {
    type: ACTION.UPD_DEMAND_FORM,
    payload: {
      key: key,
      value: value,
    },
  };
}

const bagAC = {
  addToBag: addToBag,
  removeFromBag: removeFromBag,
  postDemand: postDemand,
  updForm: updForm,
};

export default bagAC;
