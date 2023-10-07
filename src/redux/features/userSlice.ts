import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface UserState {
  Token: string;
  LoginUser: object;
}

const initialState: UserState = {
  Token: "",
  LoginUser: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser: (state, action: PayloadAction) => action.payload,
  },
});

export const { getUser } = userSlice.actions;

export default userSlice.reducer;
