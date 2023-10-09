import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface UserState {
  Token: string;
  LoginUser: {
    UserName: string;
    DisplayName: string;
    Id: string;
    IsActive: boolean;
    Password: string;
    RoleId: number;
    RoleName: string;
  };
}

const initialState: UserState = {
  Token: "",
  LoginUser: {
    UserName: "",
    DisplayName: "",
    Id: "",
    IsActive: false,
    Password: "",
    RoleId: 0,
    RoleName: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser: (_state, action: PayloadAction) => action.payload,
  },
});

export const { getUser } = userSlice.actions;

export default userSlice.reducer;
