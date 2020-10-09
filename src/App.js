import React from "react";
import logo from "./assets/under-construction.png";
import Nav from './components/navigation/Nav';
import Footer from './components/Footer';
import Header from './components/Header';

import "./App.scss";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Under construction!</p>
      </header> */}
      <Header />
        <Nav />
      <Footer />
    </div>
  );
}

export default App;
