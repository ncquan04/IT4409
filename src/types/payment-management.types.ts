import { Contacts } from "../shared/contacts";
import type { IOrder } from "../shared/models/order-model";
import type { IPayment } from "../shared/models/payment-model";

const PAYMENT_STATUS = Contacts.Status.Payment;

export interface IPaymentManagementInitialState {
    orders: (IOrder & { payment: IPayment })[];
    paymentTab: (typeof PAYMENT_STATUS)[keyof typeof PAYMENT_STATUS];
    isloading: boolean;
    error: boolean;
}
