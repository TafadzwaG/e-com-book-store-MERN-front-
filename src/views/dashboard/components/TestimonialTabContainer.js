import React, { Fragment, useEffect, useState } from "react";
import BackButton from "../../../components/BackButton";
import ButtonSimple from "../../../components/ButtonSimple";
import { API } from "../../../config";
import TestimonialForm from "../forms/TestimonialForm";

const TestimonialTabContainer = () => {
  const [create, setCreate] = useState(false);
  const [testimonials, setTestimonials] = useState([]);

  const handleCreate = () => {
    if (!create) {
      setCreate(true);
    } else {
      setCreate(false);
      getAdverts();
    }
  };

  const getTestimonials = async () => {
    const getTestimonialsResponse = await fetch(`${API}/testimonials`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseData = await getTestimonialsResponse.json();

    console.log("Testimonials", responseData.data);
    setAdverts(responseData.data);
  };

  useEffect(() => {
    getTestimonials();
  }, []);

  return (
    <div className="tab-pane fade" id="nav-testimonials" role="tabpanel">
      <div className="axil-dashboard-order">
        <div className="addrss-header d-flex align-items-center justify-content-between">
          <h4 className="title">
            {!create ? "Testimonials" : "Add Testimonial"}
          </h4>
          {!create ? (
            <ButtonSimple name={"Create Testimonial"} btnFunction={handleCreate} />
          ) : (
            <BackButton btnFuction={handleCreate} />
          )}
        </div>

        {!create ? (
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
        ) : (
          <TestimonialForm />
        )}
      </div>
    </div>
  );
};

export default TestimonialTabContainer;
