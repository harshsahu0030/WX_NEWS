import { createReducer } from "@reduxjs/toolkit";

const initialState = {};

export const newsReducer = createReducer(initialState, {
  //City Name
  GetNewsRequest: (state) => {
    state.loading = true;
  },
  GetNewsSuccess: (state, action) => {
    state.loading = false;
    state.data = action.payload;
  },
  GetNewsFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  //Errors
  clearErrors: (state) => {
    state.error = null;
  },
});
