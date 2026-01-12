import { Contacts } from "../../shared/contacts";
import type { IOrder, IProductItem } from "../../shared/models/order-model";
import type { IPayment } from "../../shared/models/payment-model";
import type { PaginationType } from "../../types/payment-management.types";
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

export const getOrderPaymentStatus = async ({
    page,
    paymentStatus,
    search,
}: {
    page: number;
    paymentStatus: number;
    search?: string;
}) => {
    try {
        const params = new URLSearchParams();
        if (search) params.append("search", search);
        params.append("page", page.toString());
        params.append("paymentStatus", paymentStatus.toString());

        const response = await apiService.get<{
            data: (IOrder & { payment: IPayment })[];
            pagination: PaginationType;
        }>(API_PATH.ORDER.ORDER_PAYMENT_STATUS.URL + "?" + params.toString());
        return response;
    } catch (err) {
        console.log("get order payment status error: ", err);
        return null;
    }
};
