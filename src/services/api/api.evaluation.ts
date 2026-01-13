import { apiService } from "./api.config";
import type { IEvaluation } from "../../shared/models/evaluation-model";
import { Contacts } from "../../shared/contacts";

/*
  Route: POST /upload/image
  Body: form-data with key 'file'
  Response: { url: string, publicId: string }
*/
interface UploadResponse {
  url: string;
  publicId: string;
}

export const evaluationApi = {
  getEvaluationsByProductId: async (productId: string): Promise<IEvaluation[]> => {
    return apiService.get<IEvaluation[]>(`/${Contacts.EVALUATION_PATH}/product/${productId}`);
  },

  submitEvaluation: async (
    productId: string, 
    data: {
      content: string[];
      rate: number;
      parentEvaluationId?: string;
      imageUrlFeedback?: string[];
    }
  ): Promise<IEvaluation> => {
    return apiService.post<IEvaluation>(`/${Contacts.EVALUATION_PATH}/product/${productId}`, data);
  },

  uploadImage: async (file: File): Promise<UploadResponse> => {
    const formData = new FormData();
    formData.append("file", file);
    return apiService.post<UploadResponse>("/api/upload/image", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },

  toggleStatus: async (evaluationId: string): Promise<IEvaluation> => {
     return apiService.patch<IEvaluation>(`/${Contacts.EVALUATION_PATH}/toggle-status/${evaluationId}`);
  }
};
