import Alert from "../Alert";
import User from "../User";

type AppPage = {
  user?: User;

  isAlert: boolean;
  alert?: Alert;
};

export default AppPage;
