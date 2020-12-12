import { CombinedState } from "redux";
import Action from "../../../types/Action";
import ProductForm from ".";
import { connect } from "react-redux";
import AccountPage from "../../../types/pages/AccountPage";
import CatalogPage from "../../../types/pages/CatalogPage";
import accountAC from "../../../store/actionCreators/account";
import AppPage from "../../../types/pages/AppPage";
import catalogAC from "../../../store/actionCreators/catalog";
import Product from "../../../types/Product";

function mapStateToProps(
  state: CombinedState<{
    app: AppPage;
    account: AccountPage;
    catalog: CatalogPage;
  }>
) {
  return {
    creator_id: state.app.user!.id,
    request: "post",

    categories: state.catalog.categories,
    product: state.account.product_form,

    formTitle: "Добавить товар",
    submitBtnTitle: "Добавить",
  };
}

function mapDispatchToProps(dispatch: (action: Action) => void) {
  return {
    updForm: (segment: string, key: number, value: string) => {
      dispatch(accountAC.updProductForm(segment, key, value));
    },

    updTable: (type: "spec" | "setting", index: number, value: string) => {
      dispatch(accountAC.updProductFormTable(type, index, value));
    },

    updNumOfRows: (action: "increase" | "decrease") => {
      dispatch(accountAC.updNumOfRows(action));
    },

    postProduct: (product: Product) => {
      dispatch(catalogAC.postProduct(product));
    },
  };
}

const ProductFormContainer = connect(mapStateToProps, mapDispatchToProps)(ProductForm);

export default ProductFormContainer;
