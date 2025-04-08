import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Organizations from "./components/Landpage";
import Navbar from "./components/Navbar/Navbar";
import Details from "./components/Details/Details";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <nav className="main-nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/details">Details</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Organizations />} />
          <Route path="/about" element={<Organizations />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
