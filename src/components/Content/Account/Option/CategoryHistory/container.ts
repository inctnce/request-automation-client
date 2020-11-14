import { connect } from "react-redux";
import { CombinedState } from "redux";
import CategoryHistory from ".";
import Action from "../../../../../types/Action";
import AppPage from "../../../../../types/pages/AppPage";
import CatalogPage from "../../../../../types/pages/CatalogPage";

function mapStateToProps(
  state: CombinedState<{
    app: AppPage;
    catalog: CatalogPage;
  }>
) {
  return {
    categories: state.catalog.categories.filter((currentValue) => {
      return currentValue.creator_id === state.app.user?.id;
    }),
  };
}

function mapDispatchToProps(dispatch: (action: Action) => void) {
  return {};
}

const CategoryHistoryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryHistory);

export default CategoryHistoryContainer;
