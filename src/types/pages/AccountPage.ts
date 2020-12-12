import Demand from "../Demand";
import Product from "../Product";

type AccountPage = {
  selected_option: number;
  product_form: Product;

  didGetUserProducts: boolean;
  user_products: Product[];

  didGetUserDemands: boolean;
  user_demands: Demand[];
};

export default AccountPage;
