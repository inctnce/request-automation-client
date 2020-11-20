import { connect } from "react-redux";
import { CombinedState } from "redux";
import CategoryForm from ".";
import appAC from "../../../../../store/actionCreators/app";
import catalogAC from "../../../../../store/actionCreators/catalog";
import Action from "../../../../../types/Action";
import Alert from "../../../../../types/Alert";
import AppPage from "../../../../../types/pages/AppPage";

function mapStateToProps(
  state: CombinedState<{
    app: AppPage;
  }>
) {
  return {
    user_id: state.app.user!.id,
  };
}

function mapDispatchToProps(dispatch: (action: Action) => void) {
  return {
    postCategory: (user_id: string, name: string) => {
      dispatch(catalogAC.postCategory(user_id, name));
    },
    alert: (alert: Alert) => {
      dispatch(appAC.alert(alert));
    },
  };
}

const CategoryFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryForm);

export default CategoryFormContainer;
