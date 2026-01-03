import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IPaymentInitState } from "../../types/payment.types";
import paymentAsync from "../async-thunk/payment.thunk";

const initialState: IPaymentInitState = {
  paymentUrl: null,
  paymentStatus: null,
  isLoading: false,
  error: false,
};

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // create payment
    builder.addCase(
      paymentAsync.createPayment.fulfilled,
      (state, action: PayloadAction<string>) => {
        state.error = false;
        state.isLoading = false;
        state.paymentUrl = action.payload;
      }
    );
    builder.addCase(paymentAsync.createPayment.pending, (state) => {
      state.error = false;
      state.isLoading = true;
    });
    builder.addCase(paymentAsync.createPayment.rejected, (state) => {
      state.error = true;
      state.isLoading = false;
    });

    // check payment update
    builder.addCase(
      paymentAsync.checkPaymentUpdate.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.error = false;
        state.isLoading = false;
        state.paymentStatus = action.payload;
      }
    );
    builder.addCase(paymentAsync.checkPaymentUpdate.pending, (state) => {
      state.error = false;
      state.isLoading = true;
    });
    builder.addCase(paymentAsync.checkPaymentUpdate.rejected, (state) => {
      state.error = true;
      state.isLoading = false;
    });
  },
});

export const {} = paymentSlice.actions;
export default paymentSlice.reducer;
