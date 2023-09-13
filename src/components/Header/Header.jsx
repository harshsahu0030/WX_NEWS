import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header">
      <h1>Project</h1>

      <div className="links">
        <NavLink
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: "inherit",
              textDecoration: "none",
            };
          }}
          to="/"
        >
          <div className="link">Weather</div>
        </NavLink>

        <NavLink
          to="/alert"
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: "inherit",
              textDecoration: "none",
            };
          }}
        >
          <div className="link">Alert</div>
        </NavLink>

        <NavLink
          to="/news"
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: "inherit",
              textDecoration: "none",
            };
          }}
        >
          <div className="link">News</div>
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
