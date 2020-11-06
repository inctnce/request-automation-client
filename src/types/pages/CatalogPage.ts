import Category from "../Category";
import Product from "../Product";

type CatalogPage = {
  didGetCategories: boolean;
  categories: Category[];

  didGetProducts: boolean;
  products: Product[];
};

export default CatalogPage;
