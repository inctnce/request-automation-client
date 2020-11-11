import { CombinedState } from "redux";
import Action from "../../../../../types/Action";
import ProductForm from ".";
import { connect } from "react-redux";
import AccountPage from "../../../../../types/pages/AccountPage";
import CatalogPage from "../../../../../types/pages/CatalogPage";
import Category from "../../../../../types/Category";
import accountAC from "../../../../../store/actionCreators/account";
import AppPage from "../../../../../types/pages/AppPage";
import catalogAC from "../../../../../store/actionCreators/catalog";

function mapStateToProps(
  state: CombinedState<{
    app: AppPage;
    account: AccountPage;
    catalog: CatalogPage;
  }>
) {
  return {
    creator_id: state.app.user!.id,

    selected_category: state.account.product_form?.selected_category!,
    categories: state.catalog.categories,

    name: state.account.product_form.name,
    specs: state.account.product_form.specs,
    price: state.account.product_form.price,
    extra_info: state.account.product_form.extra_info,
  };
}

function mapDispatchToProps(dispatch: (action: Action) => void) {
  return {
    updForm: (
      segment: "category" | "table" | "other",
      key: number,
      value: string | Category
    ) => {
      dispatch(accountAC.updProductForm(segment, key, value));
    },

    updTable: (type: "spec" | "value", index: number, value: string) => {
      dispatch(accountAC.updProductFormTable(type, index, value));
    },

    updNumOfRows: (action: "increase" | "decrease") => {
      dispatch(accountAC.updNumOfRows(action));
    },

    postProduct: (
      name: string,
      specs: string[],
      values: string[],
      price: string,
      extra_info: string,
      creator_id: string,
      category_id: string
    ) => {
      dispatch(
        catalogAC.postProduct(
          name,
          specs,
          values,
          price,
          extra_info,
          creator_id,
          category_id
        )
      );
    },
  };
}

const ProductFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductForm);

export default ProductFormContainer;
