import "./App.css";
import {
  useAddNewPostMutation,
  useGetPostsQuery,
} from "./app/features/postSlice";
import Dashboard from "./routes/dashboard/Dashboard";
import { useAppSelector } from "./utils/state-dispatch";
import { useState } from "react";
const label = { inputProps: { "aria-label": "Color switch demo" } };
import { NavLink, Outlet, Route, Routes } from "react-router-dom";
import Inventory from "./routes/inventory/Inventory";
import Supplier from "./routes/supplier/Supplier";
import { ListDebounceDemo } from "./ListDebounceDemo";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
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
        }
      >
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
  );
}

export default App;
