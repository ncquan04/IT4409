import { Contacts } from "../../shared/contacts";
import { apiService } from "./api.config";

const API_PATH = Contacts.API_CONFIG;

export const createPayment = async (
  orderId: string,
  method: string,
  delivery: string
) => {
  try {
    const response = await apiService.post<string>(
      `${API_PATH.PAYMENT.CREATE.URL}?order=${orderId}&method=${method}&delivery=${delivery}`,
      {}
    );
    return response;
  } catch (error) {
    console.log("create payment error: ", error);
    return null;
  }
};

export const checkPaymentUpdate = async (id: string) => {
  try {
    const response = await apiService.get<any>(
      API_PATH.PAYMENT.CHECKUPDATE(id).URL
    );
    return response;
  } catch (error) {
    console.log("check payment update error: ", error);
    return null;
  }
};
