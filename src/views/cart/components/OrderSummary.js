import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const OrderSummary = ({}) => {
  return (
    <Fragment>
      <div className="col-xl-5 col-lg-7 offset-xl-7 offset-lg-5">
        <div className="axil-order-summery mt--80">
          <h5 className="title mb--20">Order Summary</h5>
          <div className="summery-table-wrap">
            <table className="table summery-table mb--30">
              <tbody>
                <tr className="order-subtotal">
                  <td>Subtotal</td>
                  <td>$117.00</td>
                </tr>
                <tr className="order-shipping">
                  <td>Shipping</td>
                  <td>
                    <div className="input-group">
                      <input type="radio" id="radio1" name="shipping" checked />
                      <label for="radio1">Free Shippping</label>
                    </div>
                    <div className="input-group">
                      <input type="radio" id="radio2" name="shipping" />
                      <label for="radio2">Local: $35.00</label>
                    </div>
                    <div className="input-group">
                      <input type="radio" id="radio3" name="shipping" />
                      <label for="radio3">Flat rate: $12.00</label>
                    </div>
                  </td>
                </tr>
                <tr className="order-tax">
                  <td>State Tax</td>
                  <td>$8.00</td>
                </tr>
                <tr className="order-total">
                  <td>Total</td>
                  <td className="order-total-amount">$125.00</td>
                </tr>
              </tbody>
            </table>
          </div>
          <Link
            to="/checkout"
            className="axil-btn btn-bg-primary checkout-btn"
          >
            Process to Checkout
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default OrderSummary;
