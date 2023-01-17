import React, { useEffect } from "react";
import BestSellerCard from "../views/product/cards/BestSellerCard";
import { productActions } from "../redux-store/products-store";
import { useDispatch, useSelector } from "react-redux";
import { API } from "../config";

const BestSellers = () => {
  const dispatch = useDispatch();
  const getBestSellers = async (sortBy) => {
    dispatch(productActions.fetchProducts());
    const getBestSellersResponse = await fetch(`${API}/products?sortBy=${sortBy}&order=desc&limit=4`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseData = await getBestSellersResponse.json();
    console.table("Best Seller", responseData)
    return responseData;
  };

  //This can be made dynamic
  const sortBy = 'sold'

  
  const init = () => {
    getBestSellers(sortBy)
      .then((data) => {
        dispatch(
          productActions.setBestSellers({
            bestSellers: data
          })
        )
      })
      .catch((err) => {
        dispatch(
          productActions.failedFetchProducts({
            error: "There was an error whilst fetching"
          })
        )
      });
  };

  useEffect(() => {
    init()
  }, []);
  const bestSellers = useSelector((state) => state.product.bestSellers);

  return (
    <div className="axil-product-area axil-section-gap pb--0">
      <div className="container">
        `
        <div className="product-area pb--50">
          <div className="section-title-wrapper">
            <span className="title-highlighter highlighter-secondary">
              <i className="far fa-shopping-basket"></i>This Month
            </span>
            <h2 className="title">Best Sellers</h2>
          </div>
          <div className="row">
            {bestSellers && bestSellers.map((bestseller) => <BestSellerCard   key={bestseller._id}  product={bestseller} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
