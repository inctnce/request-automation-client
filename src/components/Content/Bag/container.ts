import { connect } from "react-redux";
import { CombinedState } from "redux";
import Bag from ".";
import bagAC from "../../../store/actionCreators/bag";
import Action from "../../../types/Action";
import BagPage from "../../../types/pages/BagPage";
import Product from "../../../types/Product";

function mapStateToProps(state: CombinedState<{ bag: BagPage }>) {
  return {
    demand: state.bag.demand,
  };
}

function mapDispatchToProps(dispatch: (action: Action) => void) {
  return {
    removeFromBag: (product: Product) => {
      dispatch(bagAC.removeFromBag(product));
    },
  };
}

const BagContainer = connect(mapStateToProps, mapDispatchToProps)(Bag);

export default BagContainer;
