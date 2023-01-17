import React, { Fragment, useEffect, useState } from "react";
import BackButton from "../../../components/BackButton";
import ButtonSimple from "../../../components/ButtonSimple";
import { API } from "../../../config";
import ProductForm from "../forms/ProductForm";

const ProductsTabContainer = () => {
  const [create, setCreate] = useState(false);
  const [products, setProducts] = useState(false);

  const handleCreate = () => {
    if (!create) {
      setCreate(true);
    } else {
      setCreate(false);
      getProducts();
    }
  };

  const getProducts = async () => {
    const getProductsResponse = await fetch(`${API}/all-products`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseData = await getProductsResponse.json();

    console.log("Products", responseData.data);
    setProducts(responseData.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="tab-pane fade" id="nav-products" role="tabpanel">
      <div className="axil-dashboard-order">
        <div className="addrss-header d-flex align-items-center justify-content-between">
          <h4 className="title">{!create ? "Products" : "Add Product"}</h4>
          {!create ? (
            <ButtonSimple name={"Create Product"} btnFunction={handleCreate} />
          ) : (
            <BackButton btnFuction={handleCreate} />
          )}
        </div>

        {!create ? (
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Description</th>
                  <th scope="col">Price</th>
                  <th scope="col">In Stock</th>
                  <th scope="col">Sold</th>
                  <th scope="col">Image</th>
                  <th scope="col">CreatedAt</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products &&
                  products.map((product) => (
                    <Fragment>
                      <tr>
                        <th>{product.name}</th>
                        <td>{product.description}</td>
                        <td>{product.price.toFixed(2)}</td>
                        <td>{product.quantity}</td>
                        <td>{product.sold}</td>
                        <td>
                          {!product.imagePath ? (
                            <div className="thumbnail">
                              <img
                                style={{ borderRadius: "50%" }}
                                src="/template_files/assets/images/product/author1.png"
                                alt="Image"
                              />
                            </div>
                          ) : (
                            <div className="thumbnail">
                              <img
                                style={{ borderRadius: "50%", width: "100px" }}
                                src={`http://localhost:8000/assets/${product.imagePath}`}
                                alt="Image"
                              />
                            </div>
                          )}
                        </td>
                        <td>{product.createdAt}</td>
                        <td>
                          <a href="#" className="axil-btn view-btn">
                            View
                          </a>
                        </td>
                      </tr>
                    </Fragment>
                  ))}
              </tbody>
            </table>
          </div>
        ) : (
          <ProductForm />
        )}
      </div>
    </div>
  );
};

export default ProductsTabContainer;
