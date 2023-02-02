import { API } from "../config";
import queryString from "query-string";

export const addToCart = async (productId, quantity, userId, token) => {
  const addToCartResponse = await fetch(`${API}/cart/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      productId,
      quantity,
    }),
  });

  const responseData = await addToCartResponse.json();
  return responseData;
};

export const getUserCart = async (userId, token) => {
  const getUserCartResponse = await fetch(`${API}/cart/${userId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const responseData = await getUserCartResponse.json();
  return responseData;
};

export const removeCartItem = async (productId, userId, token) => {
  const deletedCartItemResponse = await fetch(
    `${API}/cart/${userId}?productId=${productId}`,
    {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const responseData = await deletedCartItemResponse.json();
  return responseData;
};

export const getFiltereredProducts = async (skip, limit, filters = {}) => {
  const data = {
    limit,
    skip,
    filters,
  };
  const filteredProductsResponse = await fetch(`${API}/products/by/search`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const responseData = await filteredProductsResponse.json();
  return responseData;
};

export const getCategories = async () => {
  const getCategoriesResponse = await fetch(`${API}/categories`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const responseData = await getCategoriesResponse.json();
  return responseData.data;
};

export const list = async (params) => {
  const query = queryString.stringify(params);
  const getSearchData = await fetch(`${API}/products/search?${query}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const responseData = await getSearchData.json();
  console.log("From Search", responseData.products)
  return responseData.products;
};


