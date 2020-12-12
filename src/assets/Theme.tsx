import indigo from "@material-ui/core/colors/indigo";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const Theme = createMuiTheme({
  palette: {
    primary: {
      light: "#8187ff",
      main: indigo["A400"],
      dark: "#0031ca",
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#fff",
    },
  },
});

export default Theme;
