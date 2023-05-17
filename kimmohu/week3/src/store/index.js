import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chosenKey: null,
};

const keySlice = createSlice({
  name: "key",
  initialState,

  reducers: {
    selectKey: (state, action) => {
      state.chosenKey = action.payload;
    },
  },
});

export const store = configureStore({
  reducer: {
    key: keySlice.reducer,
  },
});

export const { selectKey } = keySlice.actions;
