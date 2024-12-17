import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="flex items-center justify-center bg-white drop-shadow">
      <div className="container flex items-center justify-between py-2">
        <NavLink className="px-2" to="/" end>
          <h2 className="py-2 text-xl font-medium text-black">Note App</h2>
        </NavLink>
        <nav>
          <NavLink className="px-3" to="/" end>
            Home
          </NavLink>
          <NavLink className="px-3" to="/dashboard">
            Dashboard
          </NavLink>
          <NavLink className="px-3" to="/login">
            Login
          </NavLink>
          <NavLink className="px-3 btn-primary" to="/signup">
            Sign Up
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
