import React from "react";
import { NavLink } from "react-router-dom";
function Nav() {
  return (
    <nav className="nav_main">
      <ul className="nav_main_list">
        <li>
          <NavLink to="/Profile">Profile</NavLink>
        </li>
        <li>
          <NavLink to="/Messages">Messages</NavLink>
        </li>
        <li>
          <NavLink to="/Users">Users</NavLink>
        </li>
        <li>
          <NavLink to="/News">News</NavLink>
        </li>
        <li>
          <NavLink to="/Music">Music</NavLink>
        </li>
        <li>
          <NavLink to="/Settings">Settings</NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Nav;
