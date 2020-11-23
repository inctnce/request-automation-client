import { connect } from "react-redux";
import { CombinedState } from "redux";
import App from ".";
import appAC from "../../store/actionCreators/app";
import catalogAC from "../../store/actionCreators/catalog";
import Action from "../../types/Action";
import AppPage from "../../types/pages/AppPage";
import CatalogPage from "../../types/pages/CatalogPage";

function mapStateToProps(
  state: CombinedState<{ app: AppPage; catalog: CatalogPage }>
) {
  return {
    isAuth: state.app.isAuth,
    isAdmin: state.app.isAdmin,

    didGetCategories: state.catalog.didGetCategories,
    didGetProducts: state.catalog.didGetProducts,

    isAlert: state.app.isAlert,
    alert: state.app.alert!,
  };
}

function mapDispatchToProps(dispatch: (action: Action) => void) {
  return {
    getCategories: () => {
      dispatch(catalogAC.getCategories());
    },
    getProducts: () => {
      dispatch(catalogAC.getProducts());
    },

    cleanAlert: () => {
      dispatch(appAC.cleanAlert());
    },
  };
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
