import React, { useEffect, useState } from "react";
import "./Weather.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import WeatherCard from "../../components/WeatherCard/WeatherCard";
import TempCard from "../../components/TempCard/TempCard";
import { useDispatch, useSelector } from "react-redux";
import {
  getWeatherByCityName,
  getWeatherByCurrentLocation,
} from "../../action/WeatherAction";
import Loader from "../../components/Loader/Loader";
import MetaData from "../../components/MetaData";

const Weather = () => {
  const [cityName, setCityName] = useState("");
  const [city, setCity] = useState("delhi");
  const dispatch = useDispatch();
  const { loading, data } = useSelector((state) => state.weather);

  const handleSearchByCityName = (e) => {
    e.preventDefault();
    setCity(cityName);
    dispatch(getWeatherByCityName(city));
  };

  const handleCurrentLocation = async () => {
    await navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;

      dispatch(getWeatherByCurrentLocation(lat, lon));
    });
  };

  useEffect(() => {
    dispatch(getWeatherByCityName(city));
  }, [dispatch, city]);

  return loading ? (
    <Loader />
  ) : (
    data && (
      <div className="weather">
        <MetaData title={`${city.toLocaleUpperCase()} -- WEATHER`} />

        <div className="leftSide">
          <div className="leftTop">
            <h1>forecast</h1>
            <button className="btn" onClick={handleCurrentLocation}>
              By Current Location
            </button>
            <div className="locationBox">
              <LocationOnIcon />
              <div className="location">
                <p>Current Location</p>
                <p>
                  {data.location.name}, {data.location.region}
                </p>
              </div>
            </div>
          </div>
          <div className="leftBottom">
            <h2>The Only Weather Forecast You Need</h2>
            <div className="dividerHorizontal"></div>
            <form className="searchInput" onSubmit={handleSearchByCityName}>
              <input
                type="text"
                className="leftInput"
                placeholder="Enter location"
                value={cityName}
                onChange={(e) => {
                  setCityName(e.target.value);
                }}
              />
              <button className="searchBtn" type="submit">
                <SearchIcon />
              </button>
            </form>
          </div>
        </div>
        <div className="rightSide">
          <h1>Today</h1>
          <WeatherCard data={data} />
          <h2>Daily</h2>
          <div className="TempCardCss">
            {data.forecast.forecastday.map((item, index) => (
              <TempCard key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default Weather;
