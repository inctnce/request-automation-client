import Action from "../../types/Action";
import Category from "../../types/Category";
import Product from "../../types/Product";
import ACTION from "../ACTION";

function postCategory(user_id: string, name: string): Action {
  return {
    type: ACTION.POST_CATEGORY,
    payload: {
      creator_id: user_id,
      name: name,
    },
  };
}

function setCategory(category: Category): Action {
  return {
    type: ACTION.SET_CATEGORY,
    payload: category,
  };
}

function getCategories(): Action {
  return {
    type: ACTION.GET_CATEGORIES,
  };
}

function getProducts(): Action {
  return {
    type: ACTION.GET_PRODUCTS,
  };
}

function setCategories(categories: Category[]): Action {
  return {
    type: ACTION.SET_CATEGORIES,
    payload: categories,
  };
}

function setProducts(products: Product[]): Action {
  return {
    type: ACTION.SET_PRODUCTS,
    payload: products,
  };
}

const catalogAC = {
  postCategory: postCategory,
  setCategory: setCategory,
  getCategories: getCategories,
  getProducts: getProducts,
  setCategories: setCategories,
  setProducts: setProducts,
};

export default catalogAC;
