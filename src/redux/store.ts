import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/userSlice";
import articaleSlice from "./features/articleSlice";
import listSclice from "./features/listSclice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    articale: articaleSlice,
    listArticale: listSclice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
