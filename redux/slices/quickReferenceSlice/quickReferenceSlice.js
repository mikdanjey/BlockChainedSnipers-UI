import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
};

export const quickReferenceSlice = createSlice({
  name: "quickReference",
  initialState,
  reducers: {
    setQuickReferenceURL: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const { setQuickReferenceURL } = quickReferenceSlice.actions;

export default quickReferenceSlice.reducer;
