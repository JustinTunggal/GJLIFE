import React from "react";
import Discord from "../images/discord.png";
import Instagram from "../images/instagram.png";
import Facebook from "../images/facebook.png";
import Logo from "../images/logo 1.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-white2">
      <div className="flex justify-between ml-20 my-5">
        <div className="font-extralight flex-col">
          <h2 className="mb-10">Contents</h2>
          <ul>
            <li>
              <Link to="/">Lifestyle?</Link>
            </li>
            <li>
              <Link to="/diets">Diets</Link>
            </li>
            <li>
              <Link to="/workout">Workouts</Link>
            </li>
            <li>
              <Link to="/aboutus">About Us</Link>
            </li>
          </ul>
        </div>

        <div className="flex mt-16 justify-between">
          <a href="https://www.facebook.com/justin.tunggal.9" target="_blank">
            <img
              className="w-[42px] h-[42px] drop-shadow-2xl transition ease-in-out duration-200 hover:scale-125"
              src={Facebook}
              alt=""
            />
          </a>
          <a href="https://www.instagram.com/justintunggal/" target="_blank">
            <img
              className="mx-10 w-[42px] h-[42px] drop-shadow-2xl transition ease-in-out duration-200 hover:scale-125"
              src={Instagram}
              alt=""
            />
          </a>
          <a href="https://discord.gg/8JszpDHWQb" target="_blank">
            <img
              className="w-[42px] h-[42px] drop-shadow-2xl transition ease-in-out duration-200 hover:scale-125"
              src={Discord}
              alt=""
            />
          </a>
        </div>

        <div className="font-extralight text-center">
          <h2 className="mb-10">About Us</h2>
          <h2>21013010@UnikaDeLaSalle.ac.id</h2>
          <h2>21013003@UnikaDeLaSalle.ac.id</h2>
        </div>

        <div className="text-black p-5 pr-10">
          <img
            className="w-[200px] h-auto -mt-5 mix-blend-exclusion"
            src={Logo}
            alt=""
          />
          <h2 className="font-extralight text-[20px]">
            A Simple Way To A Better Life
          </h2>
          <p className="font-extralight mt-[75px]">
            Copyright © 2023 UAS WebPro
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
