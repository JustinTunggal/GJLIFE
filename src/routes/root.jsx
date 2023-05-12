import React from "react";

export default function Root() {
  return (
    <>
      <nav className="flex justify-between font-extralight">
        <ul>
          <li>
            <a
              className="border-solid ease-in-out transition duration-500 rounded-[10px] px-6 py-2 hover:bg-biege hover:text-black"
              href={`/`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="border-solid ease-in-out transition duration-500 rounded-[10px] px-6 py-2 hover:bg-biege hover:text-black"
              href={`/diets`}
            >
              Diets
            </a>
          </li>
          <li>
            <a
              className="border-solid ease-in-out transition duration-500 rounded-[10px] px-6 py-2 hover:bg-biege hover:text-black"
              href={`/workout`}
            >
              Workouts
            </a>
          </li>
          <li>
            <a
              className="border-solid ease-in-out transition duration-500 rounded-[10px] px-6 py-2 hover:bg-biege hover:text-black"
              href={`/aboutus`}
            >
              About Us
            </a>
          </li>
        </ul>
      </nav>
      <div id="detail"></div>
    </>
  );
}
