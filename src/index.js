import React from "react";
import ReactDOM from "react-dom";
import "tailwindcss/tailwind.css";
import App from "./App";
import Home from "./pages/Home";
import Workout from "./pages/Workout";
import AboutUs from "./pages/aboutus";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);

reportWebVitals();
