import Action from "../../types/Action";
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

const bagAC = {
  addToBag: addToBag,
  removeFromBag: removeFromBag,
};

export default bagAC;
