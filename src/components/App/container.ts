import { connect } from "react-redux";
import { CombinedState } from "redux";
import App from ".";
import Action from "../../types/Action";
import AppPage from "../../types/pages/AppPage";

function mapStateToProps(state: CombinedState<{ app: AppPage }>) {
  return {
    isAuth: state.app.isAuth,
    isAdmin: state.app.isAdmin,
  };
}

function mapDispatchToProps(dispatch: (action: Action) => void) {
  return {};
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
