import type { IOrder } from "../shared/models/order-model";
import type { IPayment } from "../shared/models/payment-model";
import { Contacts } from "../shared/contacts";

const ORDER_STATUS = Contacts.Status.Order;

export interface IOderInitialState {
    orders: (IOrder & { payment: IPayment })[];
    filterStatus: (typeof ORDER_STATUS)[keyof typeof ORDER_STATUS];
    isloading: boolean;
    error: boolean;
}
