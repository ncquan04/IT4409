import type { IProduct, IProductVariant } from "../shared/models/product-model";

export interface IPaymentInitState {
    userInfo: {
        name: string;
        numberPhone: string;
        streetAddress: string;
        city: string;
    };
    order: {
        listProduct: {
            product: IProduct;
            variant: IProductVariant;
            quantity: number;
        }[];
        sumPrice: number;
    };
    isLoading: boolean;
    error: boolean;
}
