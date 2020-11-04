import User from "../User";

type AppPage = {
  isAuth: boolean;
  isAdmin: boolean;
  user?: User;
};

export default AppPage;
