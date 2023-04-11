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
