import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { ColorModeContext } from "../../context/ColorMode.context";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

export const Home: React.FC = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.default",
          color: "text.primary",
          borderRadius: 1,
          p: 3,
        }}
      >
        {theme.palette.mode} mode
        <IconButton
          sx={{ ml: 1 }}
          onClick={colorMode.toggleColorMode}
          color="inherit"
        >
          {theme.palette.mode === "dark" ? (
            <Brightness7Icon />
          ) : (
            <Brightness4Icon />
          )}
        </IconButton>
      </Box>
      <br />
      <br />
      <br />
      <br />
      <h1>{theme.palette.mode}</h1>
      <h1>Routing App</h1>
      <div>
        <NavLink style={{ marginRight: ".625rem" }} to="/">
          Home
        </NavLink>
        <NavLink style={{ marginRight: ".625rem" }} to="/supplier">
          Supplier
        </NavLink>
        <NavLink style={{ marginRight: ".625rem" }} to="/inventory">
          inventory
        </NavLink>
      </div>
      <Outlet />
    </>
  );
};
