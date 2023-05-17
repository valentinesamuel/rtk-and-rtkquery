import { PaletteMode } from "@mui/material";
import { amber, deepOrange, grey } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

// Define theme settings
export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#E1E5EE",
    },
    secondary: {
      main: "#2A324B",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#2A324B",
    },
    secondary: {
      main: "#E1E5EE",
    },
  },
});

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: amber,
          divider: amber[200],
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
          // palette values for dark mode
          primary: deepOrange,
          divider: deepOrange[700],
          background: {
            default: deepOrange[900],
            paper: deepOrange[900],
          },
          text: {
            primary: "#fff",
            secondary: grey[500],
          },
        }),
  },
  typography: {
    fontSize: 12,
    fontFamily: ["'Inter', sans-serif", "'Flavors', cursive"].join(","),
    h1: {
      fontSize: "4rem",
      color: "red",
      fontWeight: 700,
      fontFamily: "Flavors",
    },
  },
});
