import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";

import Home from "./pages/Home";
import Weather from "./pages/Weather";
import About from "./pages/About";
import Authentification from "./pages/Authentification";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Authentification />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;



