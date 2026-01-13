import { Contacts } from "../../shared/contacts";
import type { IOrder, IProductItem } from "../../shared/models/order-model";
import type { IPayment } from "../../shared/models/payment-model";
import { apiService } from "./api.config";
const API_PATH = Contacts.API_CONFIG;

export const createOrderBuyNow = async ({
    listProduct,
    sumPrice,
    toAddress,
    numberPhone,
    userName,
}: {
    listProduct: IProductItem[];
    sumPrice: number;
    toAddress: string;
    numberPhone: string;
    userName: string;
}) => {
    try {
        const response = await apiService.post<IOrder>(API_PATH.ORDER.BUY_NOW.URL, {
            listProduct,
            sumPrice,
            toAddress,
            numberPhone,
            userName,
        });
        return response;
    } catch (err: any) {
        console.log("Create order buy now error: ", err);
        return null;
    }
};

export const userOrderVisible = async () => {
    try {
        const response = await apiService.get<(IOrder & { payment: IPayment })[]>(
            API_PATH.ORDER.VISIBLE.URL,
        );
        return response;
    } catch (err: any) {
        console.log("user visible order error: ", err);
        return null;
    }
};

export const getUserCancelledOrders = async () => {
    try {
        const response = await apiService.get<(IOrder & { payment: IPayment })[]>(
            API_PATH.ORDER.CANCEL_ORDER.URL,
        );
        return response;
    } catch (err: any) {
        console.log("get user cancel order ", err);
        return null;
    }
};

export const getUserReturnedOrders = async () => {
    try {
        const response = await apiService.get<(IOrder & { payment: IPayment })[]>(
            API_PATH.ORDER.RETURN_ORDER.URL,
        );
        return response;
    } catch (err: any) {
        console.log("get user cancel order ", err);
        return null;
    }
};

export const getUserDeliveryOrdres = async () => {
    try {
        const response = await apiService.get<(IOrder & { payment: IPayment })[]>(
            API_PATH.ORDER.DELIVERY_ORDER.URL,
        );
        return response;
    } catch (err: any) {
        console.log("get user cancel order ", err);
        return null;
    }
};
