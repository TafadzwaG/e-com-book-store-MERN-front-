import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import Layout from "../../core/Layout";
import WishListItem from "./WishlistItem";

const WishList = () => {
  const wishlist = useSelector((state) => state.wishlist.wishlistItems);
  useEffect(() => {}, [wishlist]);

  return (
    <Layout>
      <Fragment>
        <div className="axil-wishlist-area axil-section-gap">
          <div className="container">
            <div className="product-table-heading">
              <h4 className="title">My Wish List on eTrade</h4>
            </div>
            <div className="table-responsive">
              <table className="table axil-product-table axil-wishlist-table">
                <thead>
                  <tr>
                    <th scope="col" className="product-remove"></th>
                    <th scope="col" className="product-thumbnail">
                      Product
                    </th>
                    <th scope="col" className="product-title"></th>
                    <th scope="col" className="product-price">
                      Unit Price
                    </th>
                    <th scope="col" className="product-stock-status">
                      Stock Status
                    </th>
                    <th scope="col" className="product-add-cart"></th>
                  </tr>
                </thead>
                <tbody>
                  {wishlist &&
                    wishlist.map((item) => (
                      <WishListItem key={item._id} item={item} />
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Fragment>
    </Layout>
  );
};

export default WishList;
