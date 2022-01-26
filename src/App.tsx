import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";

import { history } from "./helpers/history";
import Routes from "./routes";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="all-container app-background">
        <Header />

        <div className="main-container">
          <Routes history={history} />
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
