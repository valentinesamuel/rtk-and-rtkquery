import "./App.css";
import Dashboard from "./routes/dashboard/Dashboard";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Inventory from "./routes/inventory/Inventory";
import Supplier from "./routes/supplier/Supplier";
import { ListDebounceDemo } from "./ListDebounceDemo";
import { PaletteMode, ThemeProvider, createTheme } from "@mui/material";
import { getDesignTokens } from "./utils/theme";
import { ColorModeContext } from "./context/ColorMode.context";
import { Home } from "./routes/Home/Home";

function App() {
  const [mode, setMode] = React.useState<PaletteMode>("dark");
  const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === "light" ? "dark" : "light"
        );
      },
    }),
    []
  );
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Dashboard />} />
            <Route path="inventory" element={<Inventory />}>
              <Route index element={<h2>All products</h2>} />
              <Route path="expired" element={<h2>Expired</h2>} />
              <Route
                path="out-of-stock"
                element={
                  <div>
                    <h2>Out ofstock</h2>
                    <ListDebounceDemo />
                  </div>
                }
              />
              <Route path="low-in-stock" element={<h2>Low in stock</h2>} />
            </Route>
            <Route path="supplier" element={<Supplier />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
