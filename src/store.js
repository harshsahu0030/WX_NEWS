import { configureStore } from "@reduxjs/toolkit";
import { weatherReducer } from "./reducer/WeatherReducer";
import { newsReducer } from "./reducer/NewsReducer";

const store = configureStore({
  reducer: {
    weather: weatherReducer,
    news: newsReducer,
  },
});

export default store;
