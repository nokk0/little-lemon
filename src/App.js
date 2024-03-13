import React from "react";
import { Nav } from "./Components/Nav";
import { Header } from "./Components/Header";
import Logo from "./Components/Logo";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";


function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
