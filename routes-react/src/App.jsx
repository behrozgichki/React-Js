import React from "react";
import { Link } from "react-router";
import "./App.css"
const App = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <h2>MyApp</h2>
        </div>

        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/services">Services</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
          <Link to="/Dashbord">Dashbord</Link>
          </li>
        </ul>

        <button className="nav-btn">Get Started</button>
      </nav>

     
    </>
  );
};

export default App;