import Category from "../Category";

type ProductForm = {
  selected_category?: Category;
  name: string;
  specs: string[];
  vals: string[];
  price: string;
  extra_info: string;
};

type AccountPage = {
  selected_option: number;

  product_form: ProductForm;
};

export default AccountPage;
