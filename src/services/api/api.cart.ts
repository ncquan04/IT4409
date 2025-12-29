import { apiService } from "./api.config";
import type { ICart } from "../../shared/models/cart-model";

export const addToCart = async (
  productId: string,
  quantity: number = 1
): Promise<ICart> => {
  return apiService.post<ICart>("/cart-products", { productId, quantity });
};
