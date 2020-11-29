import { connect } from "react-redux";
import { CombinedState } from "redux";
import Option from ".";
import catalogAC from "../../../../store/actionCreators/catalog";
import Action from "../../../../types/Action";
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
    selected_option: state.account.selected_option,

    creator_id: state.app.user!.id,
    categories: state.catalog.categories.filter((currentValue) => {
      return currentValue.creator_id === state.app.user?.id;
    }),

    didGetProducts: state.account.didGetUserProducts,
    products: state.account.user_products,

    didGetDemands: state.account.didGetUserDemands,
    demands: state.account.user_demands,
  };
}

function mapDispatchToProps(dispatch: (action: Action) => void) {
  return {
    getProducts: (key: string, id: string) => {
      dispatch(catalogAC.getProducts(key, id));
    },
    getDemands: (id?: string) => {
      dispatch(catalogAC.getDemands(id));
    },
  };
}

const OptionContainer = connect(mapStateToProps, mapDispatchToProps)(Option);

export default OptionContainer;
