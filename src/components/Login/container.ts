import { connect } from "react-redux";
import { CombinedState } from "redux";
import App from ".";
import loginAC from "../../store/actionCreators/login";
import Action from "../../types/Action";
import AppPage from "../../types/pages/AppPage";

import LoginPage from "../../types/pages/LoginPage";

function mapStateToProps(state: CombinedState<{ app: AppPage; login: LoginPage }>) {
  return {
    isAuth: state.app.isAuth,
    email_val: state.login.email_val,
    password_val: state.login.passwpord_val,
  };
}

function mapDispatchToProps(dispatch: (action: Action) => void) {
  return {
    updForm: (key: number, value: string) => {
      dispatch(loginAC.updForm(key, value));
    },
    login: (email: string, password: string) => {
      dispatch(loginAC.login(email, password));
    },
  };
}

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default LoginContainer;
