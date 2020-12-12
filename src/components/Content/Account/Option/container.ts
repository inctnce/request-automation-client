import { connect } from "react-redux";
import { CombinedState } from "redux";
import Option from ".";
import accountAC from "../../../../store/actionCreators/account";
import appAC from "../../../../store/actionCreators/app";
import bagAC from "../../../../store/actionCreators/bag";
import catalogAC from "../../../../store/actionCreators/catalog";
import Action from "../../../../types/Action";
import Alert from "../../../../types/Alert";
import Demand from "../../../../types/Demand";
import AccountPage from "../../../../types/pages/AccountPage";
import AppPage from "../../../../types/pages/AppPage";
import CatalogPage from "../../../../types/pages/CatalogPage";
import Product from "../../../../types/Product";

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
    putCategory: (user_id: string, name: string) => {
      dispatch(catalogAC.postCategory(user_id, name));
    },

    updNumOfRows: (action: "increase" | "decrease") => {
      dispatch(accountAC.updNumOfRows(action));
    },
    updTable: (type: "spec" | "setting", index: number, value: string) => {
      dispatch(accountAC.updProductFormTable(type, index, value));
    },
    updForm: (segment: string, key: number, value: string) => {
      dispatch(accountAC.updProductForm(segment, key, value));
    },
    putProduct: (product: Product) => {
      dispatch(catalogAC.putProduct(product));
    },

    postDemand: (demand: Demand) => {
      dispatch(bagAC.postDemand(demand));
    },
    updDemandForm: (key: number, value: string) => {
      dispatch(bagAC.updForm(key, value));
    },

    alert: (alert: Alert) => {
      dispatch(appAC.setAlert(alert));
    },
  };
}

const OptionContainer = connect(mapStateToProps, mapDispatchToProps)(Option);

export default OptionContainer;
