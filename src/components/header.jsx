import React from "react";
import logo from "../images/logo 1.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="flex justify-between items-center p-5">
        <img
          className="w-[150px] h-auto ml-5 mix-blend-exclusion"
          src={logo}
          alt="logo"
        />

        <div className="relative" id="navbar">
          <nav className="font-extralight text-2xl text-white">
            <Link
              className="mx-[10px] border-solid ease-in-out transition duration-500 rounded-[10px] px-6 py-2 hover:bg-biege hover:text-black"
              to="/"
            >
              Home
            </Link>
            <Link
              className="mx-[10px] border-solid ease-in-out transition duration-500 rounded-[10px] px-6 py-2 hover:bg-biege hover:text-black"
              to="/diets"
            >
              Diets
            </Link>
            <Link
              className="mx-[10px] border-solid ease-in-out transition duration-500 rounded-[10px] px-6 py-2 hover:bg-biege hover:text-black"
              to="/workout"
            >
              Workouts
            </Link>
            <Link
              className="mx-[10px] border-solid ease-in-out transition duration-500 rounded-[10px] px-6 py-2 hover:bg-biege hover:text-black"
              to="/aboutus"
            >
              About Us
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;
