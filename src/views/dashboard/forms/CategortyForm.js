import React, { Fragment, useEffect, useState } from "react";

import * as yup from "yup";
import { API } from "../../../config";
import { useSelector } from "react-redux";
import Loading from "../../../components/Loading";



const CategoryForm = () => {
  const userId = useSelector((state) => state.auth.user._id);
  const token = useSelector((state) => state.auth.token);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [values, setValues] = useState({
    name: "",
    description: "",
    image: "",
    imagePath: "",
    error: "",
    createdCategory: null,
    formData: "",
  });

  const {
    name,
    description,
    image,
    imagePath,
    error,
    createdCategory,
    formData,
  } = values;
  useEffect(() => {
    setValues({ ...values, formData: new FormData() });
  }, []);

  const addCategory = async (userId, token, category) => {
    return await fetch(`${API}/category/create/${userId}`, {
      method: "POST",
      headers: {
        Accept: "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
      body: category,
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (name) => (event) => {
    const value = name === "image" ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    formData.set("name", name);
    formData.set("description", description);
    if (image) {
      formData.set("image", image);
      formData.set("imagePath", image.name);
    }
    setIsLoading(true);
    setValues({ ...values, error: "" });

    addCategory(userId, token, formData).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
        setIsLoading(false);
      } else {
        setIsLoading(false);
        setSuccess(true)
        setValues({
          ...values,
          name: "",
          description: "",
          image: "",
          imagePath: "",
          createdCategory: data.name,
        });
      }
    });
  };

  const showSuccess = () => (
    <div
      className="alert alert-info"
      style={{ display: success ? "" : "none", width: "200px" }}
    >
      New Category Added
    </div>
  );

  return (
    <Fragment>
      <div className="axil-dashboard-account">
        {showSuccess()}
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

export default CategoryForm;
