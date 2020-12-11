import userLS from "../../localStorage/user";
import AppPage from "../../types/pages/AppPage";

const app: AppPage = {
  user: userLS.get(),

  isAlert: false,
  alert: {
    message: "",
    severity: "info",
  },
};

export default app;
