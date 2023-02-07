import { API } from "../../config.js";
import { wishlistActions } from "./index.js";

export const addToWishList = (userId, productId, token, product) => {
  return async (dispatch) => {
    dispatch(wishlistActions.addToWishlist(product));

    const addToWishListRequest = async () => {
      const response = await fetch(`${API}/wishlist/add/${userId}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ productId: productId }),
      });

      if (!response.ok) {
        throw new Error("Error Whilst Adding To Wishlist");
      }
      const responseData = await response.json();
      return responseData;
    };

    try {
      const wishlist = await addToWishListRequest();
      dispatch(wishlistActions.setWishlistFromAPI(wishlist.items));
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchWishlistData = (userId, token) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(`${API}/wishlist/${userId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Could not Fetch Wishlist");
      }

      const responseData = await response.json();
      return responseData;
    };

    try {
      const wishlist = await fetchData();
      console.log("wishlist", wishlist.items);
      dispatch(wishlistActions.setWishlistFromAPI(wishlist.items));
    } catch (error) {
      console.log(error);
    }
  };
};

export const removeItemFromWishlist = (userId, productId, itemId, token) => {
  return async (dispatch) => {
    dispatch(wishlistActions.removeItemFromWishlist(itemId));

    const removeItemRequest = async () => {
      const response = await fetch(
        `${API}/wishlist/delete/${productId}/${userId}`,
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
      const newWishlist = await removeItemRequest();
      dispatch(wishlistActions.setWishlistFromAPI(newWishlist.items));
    } catch (error) {
      console.log(error);
    }
  };
};
