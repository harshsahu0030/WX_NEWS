import axios from "axios";

export const getWeatherByCityName = (city) => async (dispatch) => {
  try {
    dispatch({
      type: "GetWeatherByCityNameRequest",
    });

    let link = `https://api.weatherapi.com/v1/forecast.json?key=f2d19d7ccbe84264b5b115530222012&q=${city}&days=21&aqi=yes&alerts=yes`;

    const { data } = await axios.get(link);

    dispatch({
      type: "GetWeatherByCityNameSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "GetWeatherByCityNameFailure",
      patload: error.response.data.message,
    });
  }
};

export const getWeatherByCurrentLocation = (lat, lon) => async (dispatch) => {
  try {
    dispatch({
      type: "GetWeatherByLocationRequest",
    });

    let link = `https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${lat},${lon}&days=21&aqi=yes&alerts=yes`;

    const { data } = await axios.get(link);

    dispatch({
      type: "GetWeatherByLocationSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "GetWeatherByLocationFailure",
      patload: error.response.data.message,
    });
  }
};
