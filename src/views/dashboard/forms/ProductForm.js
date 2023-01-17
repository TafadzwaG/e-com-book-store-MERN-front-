import React, { Fragment, useEffect, useState } from "react";
import Dropzone from "react-dropzone";

import * as yup from "yup";
import { API } from "../../../config";
import { useSelector } from "react-redux";

import Loading from "../../../components/Loading";

const ProductForm = () => {
  const userId = useSelector((state) => state.auth.user._id);
  const [isLoading, setIsLoading] = useState(false);
  const token = useSelector((state) => state.auth.token);
  const [success, setSuccess] = useState(false);

  const [values, setValues] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    quantity: "",
    sold: "",
    image: "",
    shipping: false,
    createdProduct: "",
    redirectToProfile: false,
    error: "",
    formData: "",
  });

  const {
    name,
    description,
    price,
    shipping,
    sold,
    category,
    quantity,
    image,
    error,
    formData,
    redirectToProfile,
    createdProduct,
  } = values;

  //Get Categories
  const [categories, setCategories] = useState([]);
  const getCategories = async () => {
    const getProductsResponse = await fetch(`${API}/categories`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseData = await getProductsResponse.json();
    console.log("Categories", responseData.data);
    setCategories(responseData.data);
  };

  useEffect(() => {
    getCategories();
  }, []);

  const addProduct = async (userId, token, product) => {
    return await fetch(`${API}/product/create/${userId}`, {
      method: "POST",
      headers: {
        Accept: "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
      body: product,
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    setValues({ ...values, formData: new FormData() });
  }, []);

  const handleChange = (name) => (event) => {
    const value = name === "image" ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    formData.set("name", name);
    formData.set("description", description);
    formData.set("price", price);
    formData.set("category", category);
    formData.set("quantity", quantity);
    formData.set("sold", sold);
    formData.set("shipping", shipping);
    if (image) {
      formData.set("image", image);
      formData.set("imagePath", image.name);
    }

    setIsLoading(true);
    setValues({ ...values, error: "" });

    console.log("Values", values);
    console.log("FormData", formData);
    addProduct(userId, token, formData).then((data) => {
      if (data.error || data.errors) {
        setValues({ ...values, error: data.error || data.errors });
        setIsLoading(false);
      } else {
        setIsLoading(false);
        setValues({
          ...values,
          name: "",
          description: "",
          price: "",
          quantity: "",
          sold: "",
          image: "",
          shipping: false,
          createdProduct: data.name,
          redirectToProfile: false,
        });
      }
    });
  };

  return (
    <Fragment>
      <div className="axil-dashboard-account">
        <form className="account-details-form" onSubmit={handleFormSubmit}>
          <div className="row">
            <div className="col-lg-6">
              <div className="form-group">
                <label>Name</label>
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  value={name}
                  onChange={handleChange("name")}
                />
              </div>
            </div>
            <div className="col-12">
              <div className="form-group">
                <label for="contact-message">Description</label>
                <textarea
                  name="description"
                  id="contact-message"
                  cols="1"
                  rows="2"
                  value={description}
                  onChange={handleChange("description")}
                ></textarea>
              </div>
            </div>
            <div className="col-12">
              <div className="form-group mb--40">
                <label>Category</label>
                <select
                  className="select2"
                  name="category"
                  onChange={handleChange("category")}
                >
                  <option>Select Category</option>
                  {categories &&
                    categories.map((category, i) => (
                      <option key={i} value={category._id}>
                        {category.name}
                      </option>
                    ))}
                </select>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="form-group">
                <label>Price</label>
                <input
                  type="number"
                  name="price"
                  className="form-control"
                  value={price}
                  onChange={handleChange("price")}
                />
              </div>
            </div>
            <div className="col-lg-3">
              <div className="form-group">
                <label>Quantity</label>
                <input
                  type="number"
                  name="quantity"
                  className="form-control"
                  value={quantity}
                  onChange={handleChange("quantity")}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group mb--40">
                <label> Sold</label>
                <select
                  className="select2"
                  name="category"
                  onChange={handleChange("sold")}
                >
                  <option>Select Yes/No</option>
                  <option value="0">No</option>
                  <option value="1">Yes</option>
                </select>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <label className="">Image</label>
                <input
                  name="image"
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handleChange("image")}
                />
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className="form-group mb--40">
                <label> Shipping</label>
                <select
                  className="select2"
                  name="category"
                  onChange={handleChange("shipping")}
                >
                  <option>Select Yes/No</option>
                  <option value="0">No</option>
                  <option value="1">Yes</option>
                </select>
              </div>
            </div>

            {isLoading ? (
              <div className="form-group mb--0">
                <Loading />
              </div>
            ) : (
              <div className="form-group mb--0">
                <input
                  type="submit"
                  className="axil-btn"
                  value="Save Changes"
                />
              </div>
            )}
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default ProductForm;
