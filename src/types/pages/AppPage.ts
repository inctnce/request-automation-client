import Alert from "../Alert";
import User from "../User";

type AppPage = {
  didSetUser: boolean;
  isAuth: boolean;
  isAdmin: boolean;
  user?: User;

  isAlert: boolean;
  alert?: Alert;
};

export default AppPage;
