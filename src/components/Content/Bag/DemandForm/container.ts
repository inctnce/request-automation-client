import { connect } from "react-redux";
import { CombinedState } from "redux";
import Bag from ".";
import bagAC from "../../../../store/actionCreators/bag";
import Action from "../../../../types/Action";
import Demand from "../../../../types/Demand";
import AppPage from "../../../../types/pages/AppPage";
import BagPage from "../../../../types/pages/BagPage";

function mapStateToProps(state: CombinedState<{ bag: BagPage; app: AppPage }>) {
  return {
    demand: state.bag.demand,
    creator_id: state.app.user!.id,
  };
}

function mapDispatchToProps(dispatch: (action: Action) => void) {
  return {
    postDemand: (demand: Demand) => {
      dispatch(bagAC.postDemand(demand));
    },
    updForm: (key: number, value: string) => {
      dispatch(bagAC.updForm(key, value));
    },
  };
}

const BagContainer = connect(mapStateToProps, mapDispatchToProps)(Bag);

export default BagContainer;
