import { toast } from "react-toastify";
import { API } from "../../config.js";
import { cartActions } from "./index.js";

export const addToCart = (userId, productId, quantity, token, product) => {
  return async (dispatch) => {
    dispatch(cartActions.addToCart({
      product: product,
      quantity: quantity
    }));

    const addToCartRequest = async () => {
      const response = await fetch(`${API}/cart/${userId}`, {
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

      if (!response.ok) {
        throw new Error("Error whilst adding to Cart");
      }

      const responseData = await response.json();
      return responseData;
    };

    try {
      const cart = await addToCartRequest();
    } catch (error) {
      toast.error(error);
      console.log(error);
    }
  };
};

export const removeItemFromCart = (userId, productId, itemId, token) => {
  return async (dispatch) => {
    dispatch(cartActions.removeFromCart(itemId));

    const removeItemRequest = async () => {
      const response = await fetch(
        `${API}/cart/delete/${userId}?productId=${productId}`,
        {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("There was and error whilst deleting");
      }

      const responseData = await response.json();
      return responseData;
    };

    try {
      const newCart = await removeItemRequest();
      console.log("New Cart", newCart);
      dispatch(cartActions.setCartFromApi(newCart));
    } catch (error) {
      console.log(error);
    }
  };
};

export const removeSelectedItemFromCart = (userId, productId, itemId, token) => {
  return async (dispatch) => {
    // dispatch(cartActions.removeFromCart(itemId));

    const removeItemRequest = async () => {
      const response = await fetch(
        `${API}/cart/remove/${userId}?productId=${productId}`,
        {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("There was and error whilst deleting");
      }

      const responseData = await response.json();
      return responseData;
    };

    try {
      const newCart = await removeItemRequest();
      console.log("New Cart", newCart);
      dispatch(cartActions.setCartFromApi(newCart));
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchCartData = (userId, token) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(`${API}/cart/${userId}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Could not Fetch Wishlist");
      }
      const responseData = await response.json();
      console.log("User Cart", responseData);
      return responseData;
    };

    try {
      const cart = await fetchData();
      dispatch(cartActions.setCartFromApi(cart));
    } catch (error) {
      dispatch(cartActions.setCartFailed(error));
    }
  };
};
