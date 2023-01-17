import React, { Fragment, useEffect, useState } from "react";
import Dropzone from "react-dropzone";
import { useSelector } from "react-redux";
import Loading from "../../../components/Loading";
import { API } from "../../../config";

const AdvertForm = () => {
  const userId = useSelector((state) => state.auth.user._id);
  const [isLoading, setIsLoading] = useState(false);
  const token = useSelector((state) => state.auth.token);
  const [success, setSuccess] = useState(false);

  const [values, setValues] = useState({
    title: "",
    sub_title: "",
    image: "",
    imagePath: "",
    error: "",
    redirectToDashBoard: false,
    formData: "",
    createdAdvert: null,
  });

  const {
    title,
    sub_title,
    imagePath,
    image,
    error,
    redirectToDashBoard,
    formData,
  } = values;

  const addAdvert = async (userId, token, advert) => {
    return await fetch(`${API}/advert/create/${userId}`, {
      method: "POST",
      headers: {
        Accept: "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
      body: advert,
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

    formData.set("title", title);
    formData.set("sub_title", sub_title);
    if (image) {
      formData.set("image", image);
      formData.set("imagePath", image.name);
    }

    setIsLoading(true);
    setValues({ ...values, error: "" });
    addAdvert(userId, token, formData).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
        setIsLoading(false);
      } else {
        setIsLoading(false);
        setValues({
          ...values,
          title: "",
          sub_title: "",
          image: "",
          imagePath: "",
          createdAdvert: data.title,
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
                <label>Title</label>
                <input
                  name="title"
                  type="text"
                  className="form-control"
                  value={title}
                  onChange={handleChange("title")}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <label>Sub_Title</label>
                <input
                  name="sub_title"
                  type="text"
                  className="form-control"
                  value={sub_title}
                  onChange={handleChange("sub_title")}
                />
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

export default AdvertForm;
