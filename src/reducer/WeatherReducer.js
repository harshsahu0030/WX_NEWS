import { createReducer } from "@reduxjs/toolkit";

const initialState = {};

export const weatherReducer = createReducer(initialState, {
  //City Name
  GetWeatherByCityNameRequest: (state) => {
    state.loading = true;
  },
  GetWeatherByCityNameSuccess: (state, action) => {
    state.loading = false;
    state.data = action.payload;
  },
  GetWeatherByCityNameFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  //Current Location
  GetWeatherByLocationRequest: (state) => {
    state.loading = true;
  },
  GetWeatherByLocationSuccess: (state, action) => {
    state.loading = false;
    state.data = action.payload;
  },
  GetWeatherByLocationFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  //Errors
  clearErrors: (state) => {
    state.error = null;
  },
});
