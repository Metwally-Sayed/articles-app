import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Articale } from "../../types";

const initialState = [] as Articale[];

export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    listArticale: (state, action: PayloadAction<Articale>) => {
      const selectedArticale = state.find(
        (articale) => articale.id === action.payload.id
      );

      if (!selectedArticale) {
        state.push(action.payload);
        return state;
      } else {
        return state;
      }
    },
  },
});

export const { listArticale } = listSlice.actions;

export default listSlice.reducer;
