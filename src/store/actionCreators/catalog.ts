import Action from "../../types/Action";
import Category from "../../types/Category";
import Demand from "../../types/Demand";
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

function postProduct(product: Product): Action {
  return {
    type: ACTION.POST_PRODUCT,
    payload: product,
  };
}

function putProduct(product: Product): Action {
  return {
    type: ACTION.PUT_PRODUCT,
    payload: product,
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

function getProducts(key?: string, id?: string): Action {
  return {
    type: ACTION.GET_PRODUCTS,
    payload: {
      key: key,
      id: id,
    },
  };
}

function setCategories(categories: Category[]): Action {
  return {
    type: ACTION.SET_CATEGORIES,
    payload: categories,
  };
}

function setProducts(products: Product[], forUser?: boolean): Action {
  return {
    type: ACTION.SET_PRODUCTS,
    payload: {
      products: products,
      forUser: forUser,
    },
  };
}

function selectCategory(category: Category): Action {
  return {
    type: ACTION.SELECT_CATEGORY,
    payload: category,
  };
}

function getDemands(id?: string): Action {
  return {
    type: ACTION.GET_DEMANDS,
    payload: id,
  };
}

function setDemands(demands: Demand[]): Action {
  return {
    type: ACTION.SET_DEMANDS,
    payload: demands,
  };
}

const catalogAC = {
  getCategories: getCategories,
  setCategories: setCategories,
  postCategory: postCategory,
  setCategory: setCategory,
  selectCategory: selectCategory,

  getProducts: getProducts,
  setProducts: setProducts,
  postProduct: postProduct,
  putProduct: putProduct,
  setProduct: setProduct,

  getDemands: getDemands,
  setDemands: setDemands,
};

export default catalogAC;
