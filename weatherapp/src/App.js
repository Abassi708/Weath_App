import Header from "./components/Header"
import React from "react";
import "./App.css";
import NavBar from "./components/navBar";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";

import Home from "./pages/Home"
import Weather from "./pages/Weather"
import About from "./pages/About"

function App(){
  return(
    <Router>
    <div className="app">
      <Header />
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element = {<Home />}/>
          <Route path="/Weather" element = {<Weather />}/>
          <Route path="/About" element = {<About />}/>

        </Routes>
      </main>

    </div>
    </Router>
  )
}
export default App;


