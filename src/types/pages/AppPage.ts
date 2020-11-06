import User from "../User";

type AppPage = {
  didSetUser: boolean;
  isAuth: boolean;
  isAdmin: boolean;
  user?: User;
};

export default AppPage;
