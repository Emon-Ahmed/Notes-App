import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="flex items-center justify-center bg-white drop-shadow">
      <div className="container flex items-center justify-between py-2">
        <h2 className="py-2 text-xl font-medium text-black">Note App</h2>
        <nav>
          <NavLink className="px-2" to="/" end>
            Home
          </NavLink>
          <NavLink className="px-2" to="/login">
            Login
          </NavLink>
          <NavLink className="px-2" to="/signup">
            Sign Up
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
