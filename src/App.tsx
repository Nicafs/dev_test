import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';

import { Footer } from './components/Footer';
import { Header } from './components/Header';
import Routes from './routes';

const App = () => {
  return (
    <BrowserRouter>
      <div className="all-container app-background">
        <Header />

        <div className="main-container">
          <Routes />
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
