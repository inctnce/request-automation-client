import indigo from "@material-ui/core/colors/indigo";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const Theme = createMuiTheme({
  palette: {
    primary: {
      main: indigo["A400"],
    },
  },
});

export default Theme;
