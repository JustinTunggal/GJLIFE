import React, { useState, useEffect } from "react";
import axios from "axios";
import "../index.css";

const WorkoutCard = () => {
  const [cards, setCard] = useState([]);

  useEffect(() => {
    getCard();
  }, []);

  const getCard = async () => {
    const response = await axios.get(
      "http://localhost:5000/workoutintermediate"
    );
    setCard(response.data);
  };

  return (
    <div className="w-[300px] bg-white rounded-md mr-20">
      <div className="flex gap-20">
        {cards.map((card) => (
          <div key={card.id}>
            <img
              className="w-[324px] h-[304px] rounded-md"
              src={card.url}
              alt="Image"
            />
            <div className="bg-white w-[300px] h-[200px] rounded-b-md -mt-[5px] pl-5 pt-2">
              <h1 className="font-bold text-[30px]">{card.name}</h1>
              <p className="font-light w-[274px] h-auto pr-5">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkoutCard;
