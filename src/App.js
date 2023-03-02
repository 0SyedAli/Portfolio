import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import index from "../src/index.css";
import Home from "../src/components/Home.js";
import Navbar from "./components/Navbar.js";
import Contact from "./components/Contact";
import Signup from "./components/Signup.js";
import Login from "./components/Login.js"

const App = () => {
  return (
    <Router>
      <div>
        <Navbar style={index} />

        <div className="container">
          <Routes>
            <Route path="/" element={<Home style={index} />} />
            <Route
              path="/contact"
              element={
                <Contact
                  style={index}
                  email="aliahtishamsyed@gmail.com"
                  address="H.no F-600, korangi # 04, near police station, Karachi"
                  phone1="923118449006"
                  phone2="923052070050"
                />
              }
            />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
