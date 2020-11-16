import Category from "../Category";
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
};

export default AccountPage;
