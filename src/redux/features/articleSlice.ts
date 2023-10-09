import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Articale } from "../../types";

const initialState: Articale[] = [];

export const articaleSlice = createSlice({
  name: "articale",
  initialState,
  reducers: {
    getArticale: (_state, action: PayloadAction) => action.payload,
  },
});

export const { getArticale } = articaleSlice.actions;

export default articaleSlice.reducer;
