import { createSlice } from "@reduxjs/toolkit";
import type { IEvaluation } from "../../shared/models/evaluation-model";
import {
  fetchEvaluationsByProductId,
  submitEvaluation,
} from "../async-thunk/evaluation.thunk";

interface EvaluationState {
  evaluations: IEvaluation[];
  isLoading: boolean;
  error: string | null;
  submitStatus: "idle" | "loading" | "succeeded" | "failed";
}

const initialState: EvaluationState = {
  evaluations: [],
  isLoading: false,
  error: null,
  submitStatus: "idle",
};

const evaluationSlice = createSlice({
  name: "evaluation",
  initialState,
  reducers: {
    resetSubmitStatus: (state) => {
      state.submitStatus = "idle";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchEvaluationsByProductId.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchEvaluationsByProductId.fulfilled, (state, action) => {
      state.isLoading = false;
      state.evaluations = action.payload;
    });
    builder.addCase(fetchEvaluationsByProductId.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || "Failed to fetch evaluations";
    });

    builder.addCase(submitEvaluation.pending, (state) => {
      state.submitStatus = "loading";
    });
    builder.addCase(submitEvaluation.fulfilled, (state, action) => {
      state.submitStatus = "succeeded";
      state.evaluations.unshift(action.payload);
    });
    builder.addCase(submitEvaluation.rejected, (state) => {
      state.submitStatus = "failed";
    });
  },
});

export const { resetSubmitStatus } = evaluationSlice.actions;
export default evaluationSlice.reducer;
