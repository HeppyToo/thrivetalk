import React from "react";
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
import "./navigation.css";

export default function Navigation() {
  return (
    <>
      <Router>
        <h1 className="log">
          <Link to="/th" className="thriv_css">
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
          <Switch>
            <Router exact path="/about">
              <About />
            </Router>
            <Router exact path="/services">
              <Services />
            </Router>
            <Router exact path="/blog">
              <Blog />
            </Router>
            <Router exact path="/">
              <Home />
            </Router>
          </Switch>
        </div>
      </Router>
      <div className="border">
        <Link to="/contact" className="contact">
          CONTACT AS
        </Link>
      </div>
    </>
  );
  function Home() {
    return <div>Home</div>;
  }

  function About() {
    return <div>About</div>;
  }
  function Services() {
    return <div>Services</div>;
  }

  function Blog() {
    return <div>Blog</div>;
  }
}
