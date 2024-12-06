import { configureStore } from "@reduxjs/toolkit";
import { rootReducers } from "./reducers";

const createStore = () => {
  return configureStore({
    reducer: rootReducers,
    devTools: false,
  });
};

export default createStore;
