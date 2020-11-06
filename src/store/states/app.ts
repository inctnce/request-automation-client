import authLS from "../../localStorage/auth";
import didSetUserLS from "../../localStorage/didSetUser";
import userLS from "../../localStorage/user";
import AppPage from "../../types/pages/AppPage";

const app: AppPage = {
  isAuth: authLS.get(),
  didSetUser: false,
  isAdmin: false,
  user: userLS.get(),
};

export default app;
