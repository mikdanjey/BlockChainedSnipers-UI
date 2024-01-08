import { combineReducers } from "@reduxjs/toolkit";

import { counterSlice } from "./slices";

export const rootReducers = combineReducers({
  [counterSlice.name]: counterSlice.reducer,
});
