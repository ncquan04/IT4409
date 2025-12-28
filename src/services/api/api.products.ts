import { Contacts } from "../../shared/contacts";
import { apiService } from "./api.config";
import type { IProduct } from "../../shared/models/product-model";
const API_PATH = Contacts.API_CONFIG;

export const fetchProducts = async () => {
  try {
    const response = await apiService.get<IProduct[]>(API_PATH.PRODUCT.BASE);
    return response;
  } catch (error) {
    console.log("Fetch products error: ", error);
    return [];
  }
};

export const fetchProductById = async (productId: string) => {
  try {
    const response = await apiService.get<IProduct>(
      API_PATH.PRODUCT.DETAIL(productId)
    );
    return response;
  } catch (error) {
    console.log("Fetch product by id error: ", error);
    return null;
  }
};
