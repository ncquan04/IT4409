const BASE_URL = "http://localhost:4001/api";

export const fetchProducts = async (signal?: AbortSignal) => {
  try {
    const response = await fetch(`${BASE_URL}/products`, {
      signal,
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    return await response.json();
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      console.log("Fetch aborted");
      throw error;
    }
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const fetchCategories = async (signal?: AbortSignal) => {
  try {
    const response = await fetch(`${BASE_URL}/categories`, {
      signal,
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch categories");
    }
    return await response.json();
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      console.log("Fetch aborted");
      throw error;
    }
    console.error("Error fetching categories:", error);
    throw error;
  }
};
