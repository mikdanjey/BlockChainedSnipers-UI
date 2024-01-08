import { configureStore } from "@reduxjs/toolkit";
import { rootReducers } from "./rootReducers";
import { middleware } from "./middleware";
import { loadState, saveState } from "./localStorage";

const persistedState = loadState();

const reduxStore = configureStore({
  reducer: rootReducers,
  preloadedState: persistedState,
  // devTools: process.env.NEXT_PUBLIC_NODE_ENV !== 'production',
  devTools: false,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(middleware);
  },
});

reduxStore.subscribe(() => {
  const state = reduxStore.getState();
  saveState(state);
});

export default reduxStore;
