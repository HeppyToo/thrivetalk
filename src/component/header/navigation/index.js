import React from "react";
import { Link } from "react-router-dom";
import "./navigation.css";

export default function Navigation() {
  return (
    <>
        <h1 className="log">
          <Link to="/" className="thriv_css">
            Thrivetalk
          </Link>
        </h1>
        <div className="navigation">
          <Link to="/" className="header__link">
            Home
          </Link>
          <Link to="/about" className="header__link">
            About
          </Link>
          <Link to="/services" className="header__link">
            Services
          </Link>
          <Link to="/blog" className="header__link">
            Blog
          </Link>
         
        </div>
      <div className="border">
        <Link to="/contact" className="contact">
          CONTACT AS
        </Link>
      </div>
    </>
  );
}
