import React from "react";
import { Link, useParams } from "react-router-dom";


const BestSellerCard = () => {

    const params = useParams()

    return (
        <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="axil-product product-style-seven">
                <div className="product-content">
                    <div className="cart-btn">
                        <a href="#">
                            <i className="flaticon-shopping-cart"></i>
                        </a>
                    </div>
                    <div className="inner">
                        <h5 className="title"><Link to="/products/p1">Neon Sofa Chair</Link></h5>
                        <div className="product-price-variant">
                            <span className="price current-price">$29.99</span>
                            <span className="price old-price">$49.99</span>
                        </div>
                        <div className="product-rating">
                            <span className="icon">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </span>
                            <span className="rating-number">(64)</span>
                        </div>
                    </div>
                </div>
                <div className="thumbnail">
                    <Link to="/products/p1">
                        <img data-sal="zoom-out" data-sal-delay="100" data-sal-duration="800" loading="lazy" src="/template_files/assets/images/product/furniture/product-19.png" alt="Product Images" />
                    </Link>
                </div>
            </div>
        </div>
    );
}




export default BestSellerCard