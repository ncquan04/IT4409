import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IOderInitialState } from "../../types/order.type";
import { Contacts } from "../../shared/contacts";
import orderAsync from "../async-thunk/order.thunk";
import type { IOrder } from "../../shared/models/order-model";
import type { IPayment } from "../../shared/models/payment-model";

const ORDER_STATUS = Contacts.Status.Order;

const initialState: IOderInitialState = {
    orders: [],
    filterStatus: ORDER_STATUS.SHIPPING,
    isloading: false,
    error: false,
};

const orderSilce = createSlice({
    name: "order",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(orderAsync.userVisibleOrderAsync.pending, (state) => {
            state.error = false;
            state.isloading = true;
        });
        builder.addCase(
            orderAsync.userVisibleOrderAsync.fulfilled,
            (state, action: PayloadAction<(IOrder & { payment: IPayment })[]>) => {
                state.error = false;
                state.isloading = false;
                state.orders = action.payload;
            },
        );
        builder.addCase(orderAsync.userVisibleOrderAsync.rejected, (state) => {
            state.error = true;
            state.isloading = false;
        });
        //cancel-order
        builder.addCase(orderAsync.userCancelledOrders.pending, (state) => {
            state.error = false;
            state.isloading = true;
        });
        builder.addCase(
            orderAsync.userCancelledOrders.fulfilled,
            (state, action: PayloadAction<(IOrder & { payment: IPayment })[]>) => {
                state.error = false;
                state.isloading = false;
                state.orders = action.payload;
            },
        );
        builder.addCase(orderAsync.userCancelledOrders.rejected, (state) => {
            state.error = true;
            state.isloading = false;
        });
        // return order
        builder.addCase(orderAsync.userReturnedOrders.pending, (state) => {
            state.error = false;
            state.isloading = true;
        });
        builder.addCase(
            orderAsync.userReturnedOrders.fulfilled,
            (state, action: PayloadAction<(IOrder & { payment: IPayment })[]>) => {
                state.error = false;
                state.isloading = false;
                state.orders = action.payload;
            },
        );
        builder.addCase(orderAsync.userReturnedOrders.rejected, (state) => {
            state.error = true;
            state.isloading = false;
        });
        //delivered order
        builder.addCase(orderAsync.userDeliverydOrders.pending, (state) => {
            state.error = false;
            state.isloading = true;
        });
        builder.addCase(
            orderAsync.userDeliverydOrders.fulfilled,
            (state, action: PayloadAction<(IOrder & { payment: IPayment })[]>) => {
                state.error = false;
                state.isloading = false;
                state.orders = action.payload;
            },
        );
        builder.addCase(orderAsync.userDeliverydOrders.rejected, (state) => {
            state.error = true;
            state.isloading = false;
        });
    },
});

export const {} = orderSilce.actions;
export default orderSilce.reducer;
