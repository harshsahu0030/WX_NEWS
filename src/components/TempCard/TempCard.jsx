import React from "react";
import "./TempCard.css";

const TempCard = ({ item }) => {
  const time = new Date(item.date).toUTCString();
  let spliteDate = time.split(" ");
  return (
    <div className="tempCard">
      <h1>{Math.floor(item.day.avgtemp_c)}°</h1>
      <h2>
        {item.day.condition.text}
        <img src={item.day.condition.icon} alt="icon" />
      </h2>
      <h3>
        {`${spliteDate[0]} ${spliteDate[1]} ${spliteDate[2]}'${spliteDate[3]}`}
      </h3>
    </div>
  );
};

export default TempCard;
