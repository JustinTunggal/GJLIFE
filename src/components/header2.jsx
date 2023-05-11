import React from "react";
import logo from "../images/logo 1.png";

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
          <nav className="font-extralight text-2xl text-black">
            <a
              className="border-solid ease-in-out transition duration-500 rounded-[10px] px-6 py-2 hover:bg-biege hover:text-white"
              href=""
            >
              Home
            </a>
            <a
              className="mx-[10px] border-solid ease-in-out transition duration-500 rounded-[10px] px-6 py-2 hover:bg-biege hover:text-white"
              href=""
            >
              Diets
            </a>
            <a
              className="border-solid ease-in-out transition duration-500 rounded-[10px] px-6 py-2 hover:bg-biege hover:text-white"
              href=""
            >
              Workouts
            </a>
            <a
              className="border-solid ease-in-out transition duration-500 rounded-[10px] mr-10 px-6 py-2 hover:bg-biege hover:text-white mx-[10px]"
              href="./App.js"
            >
              About Us
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;
