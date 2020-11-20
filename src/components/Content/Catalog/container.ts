import { connect } from "react-redux";
import { CombinedState } from "redux";
import Catalog from ".";
import bagAC from "../../../store/actionCreators/bag";
import Action from "../../../types/Action";

import CatalogPage from "../../../types/pages/CatalogPage";
import Product from "../../../types/Product";

function mapStateToProps(state: CombinedState<{ catalog: CatalogPage }>) {
  return {
    didGetCategories: state.catalog.didGetCategories,
    didGetProducts: state.catalog.didGetProducts,

    categories: state.catalog.categories,
    products: state.catalog.products,
  };
}

function mapDispatchToProps(dispatch: (action: Action) => void) {
  return {
    addToBag: (product: Product) => {
      dispatch(bagAC.addToBag(product));
    },
  };
}

const CatalogContainer = connect(mapStateToProps, mapDispatchToProps)(Catalog);

export default CatalogContainer;
