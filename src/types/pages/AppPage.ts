import Alert from "../Alert";
import User from "../User";

type AppPage = {
  didSetUser: boolean;
  isAuth: boolean;
  isAdmin: boolean;
  user?: User;

  alert?: Alert;
};

export default AppPage;
