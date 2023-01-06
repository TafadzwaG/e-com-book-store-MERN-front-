import React from "react";

const Testimonial = () => {
  return (
    <>
      <div className="slick-single-layout testimonial-style-one">
        <div className="review-speech">
          <p>
            “ It’s amazing how much easier it has been to meet new people and
            create instantly non connections. I have the exact same personal the
            only thing that has changed is my mind set and a few behaviors. “
          </p>
        </div>
        <div className="media">
          <div className="thumbnail">
            <img
              src="/template_files/assets/images/testimonial/image-1.png"
              alt="testimonial image"
            />
          </div>
          <div className="media-body">
            <span className="designation">Head Of Idea</span>
            <h6 className="title">James C. Anderson</h6>
          </div>
        </div>
        {/* <!-- End .thumbnail --> */}
      </div>
    </>
  );
};

export default Testimonial;
