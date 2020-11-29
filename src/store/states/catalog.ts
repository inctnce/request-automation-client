import CatalogPage from "../../types/pages/CatalogPage";

const catalog: CatalogPage = {
  didGetCategories: false,
  didGetProducts: false,

  selected_categories: [],
  categories: [],

  needLoadUpProducts: true,
  products: [],
};

export default catalog;
