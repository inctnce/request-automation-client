import { connect } from "react-redux";
import { CombinedState } from "redux";
import App from ".";
import headerAC from "../../store/actionCreators/header";
import Action from "../../types/Action";
import Header from "../../types/Header";
import AppPage from "../../types/pages/AppPage";

function mapStateToProps(state: CombinedState<{ app: AppPage; header: Header }>) {
  return {
    isAdmin: state.app.user!.isAdmin,
    
    filter_value: state.header.filter_value,
  };
}

function mapDispatchToProps(dispatch: (action: Action) => void) {
  return {
    updFilter: (value: string) => {
      dispatch(headerAC.updFilter(value));
    },
    logout: () => {
      dispatch(headerAC.logout());
    },
  };
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
