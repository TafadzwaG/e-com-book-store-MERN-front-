import React, { Fragment } from "react";

const YourOrder = () => {
  return (
    <Fragment>
      <div className="axil-order-summery order-checkout-summery">
        <h5 className="title mb--20">Your Order</h5>
        <div className="summery-table-wrap">
          <table className="table summery-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              <tr className="order-product">
                <td>
                  Commodo Blown Lamp <span className="quantity">x1</span>
                </td>
                <td>$117.00</td>
              </tr>
              <tr className="order-product">
                <td>
                  Commodo Blown Lamp <span className="quantity">x1</span>
                </td>
                <td>$198.00</td>
              </tr>
              <tr className="order-subtotal">
                <td>Subtotal</td>
                <td>$117.00</td>
              </tr>
              <tr className="order-shipping">
                <td colspan="2">
                  <div className="shipping-amount">
                    <span className="title">Shipping Method</span>
                    <span className="amount">$35.00</span>
                  </div>
                  <div className="input-group">
                    <input type="radio" id="radio1" name="shipping" checked />
                    <label for="radio1">Free Shippping</label>
                  </div>
                  <div className="input-group">
                    <input type="radio" id="radio2" name="shipping" />
                    <label for="radio2">Local</label>
                  </div>
                  <div className="input-group">
                    <input type="radio" id="radio3" name="shipping" />
                    <label for="radio3">Flat rate</label>
                  </div>
                </td>
              </tr>
              <tr className="order-total">
                <td>Total</td>
                <td className="order-total-amount">$323.00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="order-payment-method">
          <div className="single-payment">
            <div className="input-group">
              <input type="radio" id="radio4" name="payment" />
              <label for="radio4">Direct bank transfer</label>
            </div>
            <p>
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order will not be shipped
              until the funds have cleared in our account.
            </p>
          </div>
          <div className="single-payment">
            <div className="input-group">
              <input type="radio" id="radio5" name="payment" />
              <label for="radio5">Cash on delivery</label>
            </div>
            <p>Pay with cash upon delivery.</p>
          </div>
          <div className="single-payment">
            <div className="input-group justify-content-between align-items-center">
              <input type="radio" id="radio6" name="payment" checked />
              <label for="radio6">Paypal</label>
              <img
                src="/template_files/assets/images/others/payment.png"
                alt="Paypal payment"
              />
            </div>
            <p>
              Pay via PayPal; you can pay with your credit card if you don’t
              have a PayPal account.
            </p>
          </div>
        </div>
        <button type="submit" className="axil-btn btn-bg-primary checkout-btn">
          Process to Checkout
        </button>
      </div>
    </Fragment>
  );
};

export default YourOrder;
