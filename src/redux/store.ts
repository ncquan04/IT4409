import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import { combineReducers } from "redux";
import productSlice from "./slice/product.slice";
import categoriesSlice from "./slice/categories.slice";
import searchSlice from "./slice/search.slice";
import cartSlice from "./slice/cart.slice";
import evaluationSlice from "./slice/evaluation.slice";
import paymentSlice from "./slice/payment.slice";
import orderSlice from "./slice/order.slice";


const rootReducer = combineReducers({
  products: productSlice,
  categories: categoriesSlice,
  cart: cartSlice,
  search: searchSlice,
  evaluation: evaluationSlice,
    payment: paymentSlice,
    order: orderSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
