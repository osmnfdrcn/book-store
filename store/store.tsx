import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import appSlice from "./slices/appSlice";
import cartSlice from "./slices/cartSlice";
import filterSlice from "./slices/filterSlice";

export const store = configureStore({
  reducer: {
    app: appSlice,
    cart: cartSlice,
    filter: filterSlice,
  },
  devTools: process.env.NODE_ENV !== "production",
});
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export { configureStore };
