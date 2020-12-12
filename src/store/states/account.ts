import AccountPage from "../../types/pages/AccountPage";

const account: AccountPage = {
  selected_option: 0,

  didGetUserProducts: false,
  user_products: [],

  didGetUserDemands: false,
  user_demands: [],

  product_form: {
    name: "",
    specs: [""],
    settings: [""],
    price: "",
    extra_info: "",
    category_id: "",
    creator_id: "",
  },
};

export default account;
