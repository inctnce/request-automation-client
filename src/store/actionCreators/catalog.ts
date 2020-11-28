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

function postProduct(
  name: string,
  specs: string[],
  settings: string[],
  price: string,
  extra_info: string,
  creator_id: string,
  category_id: string
): Action {
  return {
    type: ACTION.POST_PRODUCT,
    payload: {
      name: name,
      specs: specs,
      settings: settings,
      price: price,
      extra_info: extra_info,
      creator_id: creator_id,
      category_id: category_id,
    },
  };
}

function setProduct(product: Product): Action {
  return {
    type: ACTION.SET_PRODUCT,
    payload: product,
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

function selectCategory(category: Category): Action {
  return {
    type: ACTION.SELECT_CATEGORY,
    payload: category,
  };
}

const catalogAC = {
  postCategory: postCategory,
  setCategory: setCategory,
  postProduct: postProduct,
  setProduct: setProduct,
  getCategories: getCategories,
  getProducts: getProducts,
  setCategories: setCategories,
  setProducts: setProducts,
  selectCategory: selectCategory,
};

export default catalogAC;
