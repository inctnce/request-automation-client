import authLS from "../../localStorage/auth";
import userLS from "../../localStorage/user";
import AppPage from "../../types/pages/AppPage";

const app: AppPage = {
  isAuth: authLS.get(),
  didSetUser: authLS.get(),
  isAdmin: false,
  user: userLS.get(),

  isAlert: false,
  alert: {
    message: "",
    severity: "info",
  },
};

export default app;
