import React from "react";
import "tailwindcss/tailwind.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Workout from "./pages/Workout";
import AboutUs from "../pages/AboutUs";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="workout" element={<Workout />} />
      <Route path="aboutus" element={<AboutUs />} />
    </Routes>
  </Router>
);

export default App;
