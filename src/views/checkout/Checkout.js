import React, { Fragment } from "react";
import Layout from "../../core/Layout";
import BillingForm from "./components/BillingForm";
import CouponForm from "./components/CouponForm";
import QuickSignin from "./components/QuickSignin";
import YourOrder from "./components/YourOrder";

const Checkout = () => {
  return (
    <Fragment>
      <Layout>
        <div className="axil-checkout-area axil-section-gap">
          <div className="container">
            <form action="#">
              <div className="row">
                <div className="col-lg-6">
                  <div className="axil-checkout-notice">
                    <QuickSignin />

                    <CouponForm />
                  </div>
                  <BillingForm />
                </div>
                <div className="col-lg-6">
                  <YourOrder />
                </div>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    </Fragment>
  );
};

export default Checkout;
