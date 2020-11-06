import { connect } from "react-redux";
import { CombinedState } from "redux";
import Catalog from ".";
import Action from "../../../types/Action";

import CatalogPage from "../../../types/pages/CatalogPage";

function mapStateToProps(state: CombinedState<{ catalog: CatalogPage }>) {
  return {
    didGetCategories: state.catalog.didGetCategories,
    didGetProducts: state.catalog.didGetProducts,

    categories: state.catalog.categories,
    products: state.catalog.products,
  };
}

function mapDispatchToProps(dispatch: (action: Action) => void) {
  return {};
}

const CatalogContainer = connect(mapStateToProps, mapDispatchToProps)(Catalog);

export default CatalogContainer;
