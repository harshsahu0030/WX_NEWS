import React from "react";
import "./WeatherCard.css";

const WeatherCard = ({ data }) => {
  const time = new Date(data.location.localtime).toUTCString();
  let spliteDate = time.split(" ");
  return (
    <div className="weatherCard">
      <div className="left">
        <h1>{Math.floor(data.current.temp_c)}°</h1>
        <h2>
          {data.current.condition.text}
          <img
            className="weatherCard_img"
            src={data.current.condition.icon}
            alt="icon"
          />
        </h2>
        <h3>{`${spliteDate[0]} ${spliteDate[1]} ${spliteDate[2]}'${spliteDate[3]}`}</h3>
      </div>
      <div className="dividerVertical"></div>
      <div className="right">
        <ul>
          <li>RealFeel: {Math.floor(data.current.feelslike_c)}°</li>
          <li>Humidity: {Math.floor(data.current.humidity)}%</li>
          <li>UV index: {Math.floor(data.current.uv)} Low</li>
          <li>Cloud Cover: {Math.floor(data.current.cloud)}%</li>
          <li>Visibility: {Math.floor(data.current.vis_km)} Km</li>
        </ul>
      </div>
    </div>
  );
};

export default WeatherCard;
