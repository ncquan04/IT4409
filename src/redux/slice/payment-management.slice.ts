import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IPaymentManagementInitialState } from "../../types/payment-management.types";
import { Contacts } from "../../shared/contacts";

const PAYMENT_STATUS = Contacts.Status.Payment;

const initialState: IPaymentManagementInitialState = {
    orders: [],
    paymentTab: PAYMENT_STATUS.PAID,
    isloading: false,
    error: false,
};

const paymentManagementSlice = createSlice({
    name: "payment-management",
    initialState,
    reducers: {
        setPaymentTab: (
            state,
            action: PayloadAction<(typeof PAYMENT_STATUS)[keyof typeof PAYMENT_STATUS]>,
        ) => {
            state.paymentTab = action.payload;
        },
    },
    extraReducers: (builder) => {},
});

export const { setPaymentTab } = paymentManagementSlice.actions;
export default paymentManagementSlice.reducer;
