import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.css";

export default () => {

  return (
    <nav className="nav_header">
      <Link to="/" className="nav_link">
        MAIN
      </Link>
      <Link to="/about" className="nav_link">
        ABOUT
      </Link>
      <Link to="/hotels" className="nav_link">
        HOTELS
      </Link>
    </nav>
  );
};
