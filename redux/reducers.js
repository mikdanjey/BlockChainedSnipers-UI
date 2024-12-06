import { combineReducers } from "@reduxjs/toolkit";

import { counterSlice, quickReferenceSlice } from "./slices";

export const rootReducers = combineReducers({
  // [counterSlice.name]: counterSlice.reducer,
  [quickReferenceSlice.name]: quickReferenceSlice.reducer,
});
