import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import About from "./pages/about";
import Services from "./pages/services";
import Blog from "./pages/blog";
import Home from "./pages";

import Header from "./component/header";
import Footer from "./component/footer";


import "./App.css";


function App() {
  return (
    <div className="block__app">
      <Router>
        <Header />
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
        <Footer />
      </Router>
    </div>
  );
}

export default App;
