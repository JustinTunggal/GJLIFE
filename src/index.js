import React from "react";
import ReactDOM from "react-dom";
import "tailwindcss/tailwind.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import AboutUs from "../src/pages/aboutus";
import Diets from "./pages/Diets";
import Workout from "./pages/Workout";
import DietAtkins from "./pages/DietAtkins";
import DietZone from "./pages/DietZone";
import DietVegan from "./pages/DietVegan";
import DietIntermiten from "./pages/DietIntermiten";
import DietMediterania from "./pages/DietMediterania";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
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
  {
    path: "/dietatkins",
    element: <DietAtkins />,
  },
  {
    path: "/dietzone",
    element: <DietZone />,
  },
  {
    path: "/dietvegan",
    element: <DietVegan />,
  },
  {
    path: "/dietintermiten",
    element: <DietIntermiten />,
  },
  {
    path: "/dietmediterania",
    element: <DietMediterania />,
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root")
);
