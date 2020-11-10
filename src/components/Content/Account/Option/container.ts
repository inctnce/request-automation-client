import { connect } from "react-redux";
import { CombinedState } from "redux";
import Catalog from ".";
import accountAC from "../../../../store/actionCreators/account";
import catalogAC from "../../../../store/actionCreators/catalog";
import Action from "../../../../types/Action";
import Category from "../../../../types/Category";
import AccountPage from "../../../../types/pages/AccountPage";
import AppPage from "../../../../types/pages/AppPage";
import CatalogPage from "../../../../types/pages/CatalogPage";

function mapStateToProps(
  state: CombinedState<{
    app: AppPage;
    account: AccountPage;
    catalog: CatalogPage;
  }>
) {
  return {
    user_id: state.app.user!.id,
    selected_option: state.account.selected_option,

    selected_category: state.account.product_form?.selected_category!,
    categories: state.catalog.categories,

    product_name: state.account.product_form.name,
    num_of_rows: state.account.product_form.num_of_rows,
    specs: state.account.product_form.specs,
    product_price: state.account.product_form.price,
    extra_info: state.account.product_form.extra_info,
  };
}

function mapDispatchToProps(dispatch: (action: Action) => void) {
  return {
    postCategory: (user_id: string, name: string) => {
      dispatch(catalogAC.postCategory(user_id, name));
    },
    updProductForm: (
      segment: "category" | "table" | "other",
      key: number,
      value: string | Category
    ) => {
      dispatch(accountAC.updProductForm(segment, key, value));
    },
    updNumOfRows: (action: "increase" | "decrease") => {
      dispatch(accountAC.updNumOfRows(action));
    },
  };
}

const CatalogContainer = connect(mapStateToProps, mapDispatchToProps)(Catalog);

export default CatalogContainer;
