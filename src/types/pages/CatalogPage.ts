import Category from "../Category";
import Product from "../Product";

type CatalogPage = {
  didGetCategories: boolean;
  selected_category?: Category;
  categories: Category[];

  didGetProducts: boolean;
  products: Product[];
};

export default CatalogPage;
