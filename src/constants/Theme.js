import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  overrides: {
    MuiOutlinedInput: {
      notchedOutline: {
        borderColor: "black",
        "&$focused": {
          borderWidth: "1px",
          color: "green",
          borderColor: "cyan",
        },
      },
    },
  },
});

export { theme };
