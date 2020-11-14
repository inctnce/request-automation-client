import { connect } from "react-redux";
import { CombinedState } from "redux";
import Account from ".";
import accountAC from "../../../store/actionCreators/account";
import Action from "../../../types/Action";
import AccountPage from "../../../types/pages/AccountPage";

function mapStateToProps(state: CombinedState<{ account: AccountPage }>) {
  return {
    selected_option: state.account.selected_option,
  };
}

function mapDispatchToProps(dispatch: (action: Action) => void) {
  return {
    setOption: (selected_option: number) => {
      dispatch(accountAC.setOption(selected_option));
    },
  };
}

const AccountContainer = connect(mapStateToProps, mapDispatchToProps)(Account);

export default AccountContainer;
