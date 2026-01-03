import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  checkPaymentUpdate,
  createPayment,
} from "../../services/api/api.payment";

class PaymentAsync {
  createPayment = createAsyncThunk<
    string,
    {
      orderId: string;
      method: string;
      delivery: string;
    },
    { rejectValue: any }
  >(
    "payment/create",
    async (
      payload: { orderId: string; method: string; delivery: string },
      { rejectWithValue }
    ) => {
      try {
        const { orderId, method, delivery } = payload;
        const response = await createPayment(orderId, method, delivery);
        if (!response) {
          throw new Error("payment error");
        }
        return response;
      } catch (err) {
        console.log("create payment error: ", err);
        return rejectWithValue({
          error: "create payment error",
        });
      }
    }
  );

  checkPaymentUpdate = createAsyncThunk<
    any,
    {
      id: string;
    },
    { rejectValue: any }
  >(
    "payment/check-update",
    async (payload: { id: string }, { rejectWithValue }) => {
      try {
        const { id } = payload;
        const response = await checkPaymentUpdate(id);
        if (!response) {
          throw new Error("payment check update error");
        }
        return response;
      } catch (err) {
        console.log("payment check update error: ", err);
        return rejectWithValue({
          error: "payment check update error",
        });
      }
    }
  );
}

const paymentAsync = new PaymentAsync();
export default paymentAsync;
