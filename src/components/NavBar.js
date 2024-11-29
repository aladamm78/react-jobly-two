import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/companies">Companies</NavLink>
      <NavLink to="/jobs">Jobs</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/signup">Signup</NavLink>
      <NavLink to="/profile">Profile</NavLink>
    </nav>
  );
}

export default NavBar;
