import { API } from "../config";

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

  const responseData = await deletedCartItemResponse.json()
  return responseData
};
