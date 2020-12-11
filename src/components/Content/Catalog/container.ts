import { connect } from "react-redux";
import { CombinedState } from "redux";
import Catalog from ".";
import bagAC from "../../../store/actionCreators/bag";
import catalogAC from "../../../store/actionCreators/catalog";
import Action from "../../../types/Action";
import Category from "../../../types/Category";

import CatalogPage from "../../../types/pages/CatalogPage";
import Product from "../../../types/Product";

function mapStateToProps(state: CombinedState<{ catalog: CatalogPage }>) {
  return {
    didGetCategories: state.catalog.didGetCategories,
    needLoadUpProducts: state.catalog.needLoadUpProducts,

    selected_category: state.catalog.selected_category!,
    categories: state.catalog.categories,

    products: state.catalog.products.filter((product: Product) => {
      if (state.catalog.selected_category?.id) {
        return product.category_id === state.catalog.selected_category?.id;
      }
      return product;
    }),
  };
}

function mapDispatchToProps(dispatch: (action: Action) => void) {
  return {
    addToBag: (product: Product) => {
      dispatch(bagAC.addToBag(product));
    },
    selectCategory: (category: Category) => {
      dispatch(catalogAC.selectCategory(category));
    },

    getProducts: (key: string, id: string) => {
      dispatch(catalogAC.getProducts(key, id));
    },
  };
}

const CatalogContainer = connect(mapStateToProps, mapDispatchToProps)(Catalog);

export default CatalogContainer;
