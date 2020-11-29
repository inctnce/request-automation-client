import initialState from "../states/catalog";
import ACTION from "../ACTION";
import CatalogPage from "../../types/pages/CatalogPage";
import Action from "../../types/Action";

function catalog(state: CatalogPage = initialState, action: Action): CatalogPage {
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
        selected_category: action.payload[0],
        selected_categories: [action.payload[0].id],
        needLoadUpProducts: true,
      };
    case ACTION.SET_PRODUCTS:
      return {
        ...state,
        didGetProducts: true,
        products: action.payload.forUser ? state.products : [...state.products, ...action.payload.products],
      };
    case ACTION.SET_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case ACTION.SELECT_CATEGORY:
      let didFind = false;
      state.selected_categories.forEach((category_id: string) => {
        if (category_id === action.payload.id) {
          didFind = true;
          return;
        }
      });

      return {
        ...state,
        selected_category: action.payload,
        selected_categories: didFind ? state.selected_categories : [action.payload.id, ...state.selected_categories],
        needLoadUpProducts: !didFind,
      };
  }

  return state;
}

export default catalog;
