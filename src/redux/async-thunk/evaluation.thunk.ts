import { createAsyncThunk } from "@reduxjs/toolkit";
import { evaluationApi } from "../../services/api/api.evaluation";

export const fetchEvaluationsByProductId = createAsyncThunk(
  "evaluation/fetchByProductId",
  async (productId: string, { rejectWithValue }) => {
    try {
      const data = await evaluationApi.getEvaluationsByProductId(productId);
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message || "Failed to fetch evaluations");
    }
  }
);

interface SubmitEvaluationPayload {
  productId: string;
  userId: string;
  rate: number;
  content: string[];
  images?: File[];
  parentEvaluationId?: string;
}

export const submitEvaluation = createAsyncThunk(
  "evaluation/submit",
  async (payload: SubmitEvaluationPayload, { rejectWithValue }) => {
    try {
      let imageUrlFeedback: string[] = [];
      
      if (payload.images && payload.images.length > 0) {
        // Upload all images
        const uploadPromises = payload.images.map((file) => evaluationApi.uploadImage(file));
        const results = await Promise.all(uploadPromises);
        imageUrlFeedback = results.map((res) => res.url);
      }

      const newReview = await evaluationApi.submitEvaluation(payload.productId, {
        content: payload.content,
        rate: payload.rate,
        imageUrlFeedback,
        parentEvaluationId: payload.parentEvaluationId
      });

      return newReview;
    } catch (error: any) {
      return rejectWithValue(error.message || "Failed to submit evaluation");
    }
  }
);
