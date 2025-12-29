import { apiService } from "./api.config";
import { Contacts } from "../../shared/contacts";
import type { User } from "../../shared/models/user-model";

export type LoginResponse = {
  user: User;
  accessToken?: string;
  refreshToken?: string;
};

export type RegisterPayload = {
  username: string;
  email: string;
  password: string;
  phoneNumber: string;
  dateOfBirth: string | Date | number;
  address?: string[];
};

export const authApi = {
  login: async (email: string, password: string) => {
    return apiService.post<LoginResponse>(Contacts.API_CONFIG.AUTH.LOGIN, {
      email,
      password,
    });
  },

  register: async (payload: RegisterPayload) => {
    const dateOfBirth = new Date(payload.dateOfBirth).getTime();

    return apiService.post(Contacts.API_CONFIG.AUTH.REGISTER, {
      ...payload,
      dateOfBirth,
    });
  },

  logout: async () => {
    return apiService.post(Contacts.API_CONFIG.AUTH.LOGOUT);
  },
};
