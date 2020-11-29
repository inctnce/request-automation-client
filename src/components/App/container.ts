import { connect } from "react-redux";
import { CombinedState } from "redux";
import App from ".";
import appAC from "../../store/actionCreators/app";
import catalogAC from "../../store/actionCreators/catalog";
import Action from "../../types/Action";
import Category from "../../types/Category";
import AppPage from "../../types/pages/AppPage";
import CatalogPage from "../../types/pages/CatalogPage";

function mapStateToProps(state: CombinedState<{ app: AppPage; catalog: CatalogPage }>) {
  const category_id = state.catalog.categories.length > 0 ? state.catalog.categories[0].id : undefined;

  return {
    isAuth: state.app.isAuth,
    isAdmin: state.app.isAdmin,

    didGetCategories: state.catalog.didGetCategories,

    category_id: category_id,
    didGetProducts: state.catalog.needLoadUpProducts,

    isAlert: state.app.isAlert,
    alert: state.app.alert!,
  };
}

function mapDispatchToProps(dispatch: (action: Action) => void) {
  return {
    getCategories: () => {
      dispatch(catalogAC.getCategories());
    },

    selectCategory: (category: Category) => {
      dispatch(catalogAC.selectCategory(category));
    },

    getProducts: (key: string, id: string) => {
      dispatch(catalogAC.getProducts(key, id));
    },

    cleanAlert: () => {
      dispatch(appAC.cleanAlert());
    },
  };
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
