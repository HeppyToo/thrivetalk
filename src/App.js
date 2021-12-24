import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./component/header/logo";
import Footer from "./component/footer/logofooter";
import Introduction from "./component/info/introduction";

function App() {
  return (
    <div className="block__app">
      <BrowserRouter>
        <Header />
        <Introduction />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
