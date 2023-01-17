import React, { Fragment, useEffect, useState } from "react";
import BackButton from "../../../components/BackButton";
import ButtonSimple from "../../../components/ButtonSimple";
import { API } from "../../../config";

const WishlistTabContainer = () => {
  const [wishlists, setWishlists] = useState([]);
  const [create, setCreate] = useState(false);

  const handleCreate = () => {
    if (!create) {
      setCreate(true);
    } else {
      setCreate(false);
      getWishlists();
    }
  };

  const getWishlists = async () => {};

  useEffect(() => {
    getWishlists();
  }, []);
  return (
    <Fragment>
      <div className="tab-pane fade" id="nav-wishlist" role="tabpanel">
        <div className="axil-dashboard-order">
          <h4 className="title ">WishList</h4>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Order</th>
                  <th scope="col">Date</th>
                  <th scope="col">Status</th>
                  <th scope="col">Total</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">#6523</th>
                  <td>September 10, 2020</td>
                  <td>Processing</td>
                  <td>$326.63 for 3 items</td>
                  <td>
                    <a href="#" className="axil-btn view-btn">
                      View
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default WishlistTabContainer;
