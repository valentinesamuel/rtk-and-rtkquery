import { Box, IconButton, Typography, useTheme, styled } from "@mui/material";

import { styled as StyledComponent } from "styled-components";
import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { ColorModeContext } from "../../context/ColorMode.context";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const StyledBox = styled(Box)(({ theme }) => ({
  height: "250px",
  width: "250px",
  backgroundColor: theme.palette.primary.dark,
  marginTop: theme.spacing(3),
}));

const StyledCompBox = StyledComponent(StyledBox)`
  border-radius: 30px;

  @media screen and (max-width: 450px) {
    border-radius: 10px;
  }
`;

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
        <Typography variant="h1">asdfg</Typography>
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
      <StyledBox></StyledBox>
      <StyledCompBox></StyledCompBox>
      <br />
      <Typography
        variant="h1"
        sx={{
          fontWeight: 400,
        }}
      >
        asdfg
      </Typography>
      <Box
        sx={{
          bgcolor: "secondary.main",
          height: "500px",
          width: {
            desktop: 350,
            laptop: 250,
            tablet: 150,
            mobile: 50,
          },
        }}
      ></Box>
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
