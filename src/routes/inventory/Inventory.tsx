import React from "react";
import { NavLink, Outlet, useSearchParams } from "react-router-dom";

const Inventory = () => {


  return (
    <div>
      <NavLink style={{ marginRight: ".625rem" }} to="">
        <h1>Inventory</h1>
      </NavLink>
      <div>
        <NavLink style={{ marginRight: ".625rem" }} to="out-of-stock">
          Out of stock
        </NavLink>
        <NavLink style={{ marginRight: ".625rem" }} to="low-in-stock">
          Low in stock
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default Inventory;
