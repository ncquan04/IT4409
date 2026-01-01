import { Contacts } from "../../shared/contacts";
import { apiService } from "./api.config";
import type {
  IProduct,
  IProductVariant,
} from "../../shared/models/product-model";

const API_PATH = Contacts.API_CONFIG;

interface BackendProduct {
  title: string;
  idProduct: string;
  idVariant: string | null;
  pricePre: number | null;
  salePricePre: number | null;
  imageUrl: string | null;
  rate: number;
}

interface BackendProductResponse {
  data: BackendProduct[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export const fetchProducts = async (): Promise<IProduct[]> => {
  try {
    const response = await apiService.get<BackendProductResponse>(
      API_PATH.PRODUCT.GET_ALL.URL
    );

    if (response && Array.isArray(response.data)) {
      return response.data.map((item) => {
        const variant: IProductVariant = {
          _id: item.idVariant || "",
          version: "",
          colorName: "",
          hexcode: "",
          images: item.imageUrl ? [item.imageUrl] : [],
          quantity: 0,
          price: item.pricePre || 0,
          salePrice: item.salePricePre || undefined,
          sku: "",
        };

        const product: IProduct = {
          _id: item.idProduct,
          title: item.title,
          brand: "",
          description: "",
          descriptionDetail: "",
          specifications: [],
          variants: [variant],
          categoryId: "",
          isHide: Contacts.Status.Evaluation.PUBLIC,
          rating: item.rate,
        };
        return product;
      });
    }

    return [];
  } catch (error) {
    console.log("Fetch products error: ", error);
    return [];
  }
};

export const fetchProductById = async (productId: string) => {
  try {
    const response = await apiService.get<IProduct>(
      API_PATH.PRODUCT.GET_DETAIL(productId).URL
    );
    return response;
  } catch (error) {
    console.log("Fetch product by id error: ", error);
    return null;
  }
};
