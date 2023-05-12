import React from "react";
import ReactDOM from "react-dom";
import "tailwindcss/tailwind.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Diets from "./pages/Diets";
import Workout from "./pages/Workout";
import Calculator from "./components/calculator";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Calculator />,
  },
  {
    path: "/diets",
    element: <Diets />,
  },
  {
    path: "/workout",
    element: <Workout />,
  },

  {
    path: "/aboutus",
    element: <AboutUs />,
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root")
);
