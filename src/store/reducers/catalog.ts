import initialState from "../states/catalog";
import ACTION from "../ACTION";
import CatalogPage from "../../types/pages/CatalogPage";
import Action from "../../types/Action";

function catalog(
  state: CatalogPage = initialState,
  action: Action
): CatalogPage {
  switch (action.type) {
    case ACTION.SET_CATEGORY:
      return {
        ...state,
        categories: [...state.categories, action.payload],
      };
    case ACTION.SET_CATEGORIES:
      return {
        ...state,
        didGetCategories: true,
        categories: [...action.payload],
      };
    case ACTION.SET_PRODUCTS:
      return {
        ...state,
        didGetProducts: true,
        products: [...action.payload],
      };
    case ACTION.SET_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case ACTION.SELECT_CATEGORY:
      return {
        ...state,
        selected_category: action.payload,
      };
  }

  return state;
}

export default catalog;
