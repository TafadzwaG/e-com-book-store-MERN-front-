import React, { Fragment, useEffect, useState } from "react";

import * as yup from "yup";
import { API } from "../../../config";
import { useSelector } from "react-redux";
import Loading from "../../../components/Loading";
import { toast } from "react-toastify";

const CategoryForm = ({ isEdit, itemId }) => {
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

    if (isEdit) {
      getCategory();
    }
    if (success) {
      toast.success(`Category updated successfully`);
    }
  }, [success]);

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

  const getCategory = async () => {
    return await fetch(`${API}/category/${itemId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        setValues({
          name: data.name,
          description: data.description,
          image: data.imagePath,
          imagePath: data.imagePath,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (name) => (event) => {
    const value = name === "image" ? event.target.files[0] : event.target.value;
    if (!isEdit) {
      formData.set(name, value);
    }
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
        setSuccess(true);
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

  const handleFormEdit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    const formData = new FormData();
    formData.set("name", name);
    formData.set("description", description);
    if (image) {
      formData.set("image", image);
      formData.set("imagePath", image.name);
    }

    setValues({ ...values, error: "" });
    editCategory(userId, token, formData).then((data) => {
      if (data.error || data.errors) {
        setValues({ ...values, error: data.error });
        setIsLoading(false);
      } else {
        setIsLoading(false);
        setSuccess(true);
        setValues({
          ...values,
          name: "",
          description: "",
          image: "",
          imagePath: "",
        });
      }
    });
  };

  const editCategory = async (userId, token, editValue) => {
    console.log("Edit Attributes", editValue);
    return await fetch(`${API}/category/${itemId}/${userId}`, {
      method: "PUT",
      headers: {
        Accept: "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
      body: editValue,
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Fragment>
      <div className="axil-dashboard-account">
        <form
          className="account-details-form"
          onSubmit={!isEdit ? handleFormSubmit : handleFormEdit}
        >
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
