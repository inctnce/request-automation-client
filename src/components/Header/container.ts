import { connect } from "react-redux";
import { CombinedState } from "redux";
import App from ".";
import headerAC from "../../store/actionCreators/header";
import Action from "../../types/Action";
import Header from "../../types/Header";

function mapStateToProps(state: CombinedState<{ header: Header }>) {
  return {
    filter_value: state.header.filter_value,
  };
}

function mapDispatchToProps(dispatch: (action: Action) => void) {
  return {
    updFilter: (value: string) => {
      dispatch(headerAC.updFilter(value));
    },
  };
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
