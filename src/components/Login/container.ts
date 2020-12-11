import { connect } from "react-redux";
import { CombinedState } from "redux";
import App from ".";
import authAC from "../../store/actionCreators/auth";
import Action from "../../types/Action";
import AppPage from "../../types/pages/AppPage";

import LoginPage from "../../types/pages/LoginPage";

function mapStateToProps(state: CombinedState<{ app: AppPage; login: LoginPage }>) {
  return {
    isAuth: state.app.user ? true : false,

    email_val: state.login.email_val,
    password_val: state.login.password_val,
  };
}

function mapDispatchToProps(dispatch: (action: Action) => void) {
  return {
    handleLoginButton: () => {
      dispatch(authAC.handleLoginButton());
    },
    updForm: (key: number, value: string) => {
      dispatch(authAC.updForm(key, value));
    },
    login: (email: string, password: string) => {
      dispatch(authAC.login(email, password));
    },
  };
}

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default LoginContainer;
