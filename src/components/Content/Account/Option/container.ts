import { connect } from "react-redux";
import { CombinedState } from "redux";
import Catalog from ".";
import catalogAC from "../../../../store/actionCreators/catalog";
import Action from "../../../../types/Action";
import AccountPage from "../../../../types/pages/AccountPage";
import AppPage from "../../../../types/pages/AppPage";
import CatalogPage from "../../../../types/pages/CatalogPage";

function mapStateToProps(
  state: CombinedState<{ app: AppPage; account: AccountPage; catalog: CatalogPage }>
) {
  return {
    user_id: state.app.user!.id,
    selected_option: state.account.selected_option,

    selected_category: state.account.product_form?.selected_category!,
    categories: state.catalog.categories,
    specs: state.account.product_form.specs,
    vals: state.account.product_form.vals,
  };
}

function mapDispatchToProps(dispatch: (action: Action) => void) {
  return {
    postCategory: (user_id: string, name: string) => {
      dispatch(catalogAC.postCategory(user_id, name));
    },
  };
}

const CatalogContainer = connect(mapStateToProps, mapDispatchToProps)(Catalog);

export default CatalogContainer;
