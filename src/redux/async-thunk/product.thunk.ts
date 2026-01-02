import { createAsyncThunk } from "@reduxjs/toolkit";
import type { IProduct } from "../../shared/models/product-model";
import { fetchProductById, fetchProducts } from "../../services/api/api.products";

class ProductAsync {
    //fetch product list
    fetchProduct = createAsyncThunk<
        {
            products: IProduct[];
            page?: number;
            totalPages?: number;
        },
        { categoryId?: string; page?: number },
        { rejectValue: any }
    >(
        "product/fetch-list",
        async (payload: { categoryId?: string; page?: number }, { rejectWithValue }) => {
            try {
                const { categoryId, page } = payload;
                const response = await fetchProducts(categoryId, page);
                if (!response) {
                    throw new Error("product not found");
                }
                return {
                    products: response.products,
                    page: response.page,
                    totalPages: response.totalPages,
                };
            } catch (err) {
                console.log("fetch prodcut list error: ", err);
                return rejectWithValue({
                    error: "fetch product list error: ",
                });
            }
        },
    );
    //fetch product detail
    fetchDetail = createAsyncThunk<
        {
            productDetail: IProduct;
        },
        {
            productId: string;
        },
        { rejectValue: any }
    >("product/fetch-detail", async (payload: { productId: string }, { rejectWithValue }) => {
        try {
            const { productId } = payload;
            const productDetail = await fetchProductById(productId);
            if (!productDetail) {
                throw new Error("product not found");
            }
            return { productDetail };
        } catch (error) {
            console.log("last message screen chat error: ", error);
            return rejectWithValue({
                error: "last message screen chat error: ",
            });
        }
    });
}
const productAsync = new ProductAsync();
export default productAsync;
