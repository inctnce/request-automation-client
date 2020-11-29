import Category from "../Category";
import Demand from "../Demand";
import Product from "../Product";
import Specification from "../Specification";

type ProductForm = {
  selected_category?: Category;
  name: string;
  specs: Specification[];
  price: string;
  extra_info: string;
};

type AccountPage = {
  selected_option: number;
  product_form: ProductForm;

  didGetUserProducts: boolean;
  user_products: Product[];

  didGetUserDemands: boolean;
  user_demands: Demand[];
};

export default AccountPage;
