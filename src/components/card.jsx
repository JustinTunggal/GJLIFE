import React, { Component } from "react";

class card extends Component {
  render() {
    return (
      <div>
        <div className="w-[300px] h-[510px] bg-white rounded-md mr-20">
          <img
            className="w-[324px] h-[304px] rounded-md"
            src="../image/Racetrack Runner.gif"
            alt=""
          />
          <div className="ml-5">
            <h1 className="font-semibold text-[40px]">Title</h1>
            <p className="font-light w-[274px] h-auto pr-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              iusto ratione at quasi. Nobis asperiores ea, maxime perspiciatis
              reiciendis voluptas quia est.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default card;
