import { createAsyncThunk } from "@reduxjs/toolkit";
import { getEvaluationsByProductId } from "../../shared/mocks/evaluation.mock";
import { Evaluation } from "../../shared/models/evaluation-model";
import { Contacts } from "../../shared/contacts";

const mockApiCall = <T>(data: T, delay: number = 1000): Promise<T> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), delay);
  });
};

export const fetchEvaluationsByProductId = createAsyncThunk(
  "evaluation/fetchByProductId",
  async (productId: string) => {
    const data = getEvaluationsByProductId(productId);
    return await mockApiCall(data, 800);
  }
);

interface SubmitEvaluationPayload {
  productId: string;
  userId: string;
  rate: number;
  content: string[];
  images?: File[];
}

export const submitEvaluation = createAsyncThunk(
  "evaluation/submit",
  async (payload: SubmitEvaluationPayload) => {
    const newReview = new Evaluation({
      _id: Math.random().toString(36).substr(2, 9),
      userId: payload.userId,
      productId: payload.productId,
      content: payload.content,
      rate: payload.rate as any,
      imageUrlFeedback: payload.images
        ? payload.images.map((f) => URL.createObjectURL(f))
        : [],
      isHide: Contacts.Status.Evaluation.PUBLIC,
    });

    // Simulate API call
    return await mockApiCall(newReview, 1500);
  }
);
