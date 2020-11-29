import Category from "../Category";
import Product from "../Product";

type CatalogPage = {
  didGetCategories: boolean;

  selected_category?: Category;
  selected_categories: string[];
  categories: Category[];

  didGetProducts: boolean;
  needLoadUpProducts: boolean;
  products: Product[];
};

export default CatalogPage;
