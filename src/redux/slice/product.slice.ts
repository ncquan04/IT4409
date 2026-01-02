import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IProductInitState } from "../../types/product.types";
import type { IProduct } from "../../shared/models/product-model";
import productAsync from "../async-thunk/product.thunk";

const initialState: IProductInitState = {
    products: [],
    productDetail: null,
    error: false,
    isLoading: false,
    page: 1,
    totalPages: 1,
};

const productSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        //products list
        builder.addCase(
            productAsync.fetchProduct.fulfilled,
            (
                state,
                action: PayloadAction<{
                    products: IProduct[];
                    page?: number;
                    totalPages?: number;
                }>,
            ) => {
                state.error = false;
                state.isLoading = false;
                state.products = action.payload.products;
                state.page = action.payload.page;
                state.totalPages = action.payload.totalPages;
            },
        );
        builder.addCase(productAsync.fetchProduct.pending, (state) => {
            (state.error = false), (state.isLoading = true);
        });
        builder.addCase(productAsync.fetchProduct.rejected, (state) => {
            (state.error = true), (state.isLoading = false);
        });
        // product detail
        builder.addCase(
            productAsync.fetchDetail.fulfilled,
            (state, action: PayloadAction<{ productDetail: IProduct }>) => {
                (state.error = false), (state.isLoading = false);
                state.productDetail = action.payload.productDetail;
            },
        );
        builder.addCase(productAsync.fetchDetail.pending, (state) => {
            (state.error = false), (state.isLoading = true);
        });
        builder.addCase(productAsync.fetchDetail.rejected, (state) => {
            (state.error = true), (state.isLoading = false);
        });
    },
});

export const {} = productSlice.actions;
export default productSlice.reducer;
