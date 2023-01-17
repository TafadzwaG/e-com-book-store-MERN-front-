import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Loading from "../../../components/Loading";
import { API } from "../../../config";

const UserForm = () => {
  const userId = useSelector((state) => state.auth.user._id);
  const token = useSelector((state) => state.auth.token);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    createdUser: null,
    error: "",
    formData: "",
    redirectToDashBoard: false,
    image: "",
    profilePath: ""
  });

  const {
    name,
    email,
    password,
    createdUser,
    error,
    formData,
    redirectToDashBoard,
  } = values;

  const createUser = async (userId, token, user) => {
    return await fetch(`${API}/user/create/${userId}`, {
      method: "POST",
      headers: {
        Accept: "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
      body: user,
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
    formData.set("email", email);
    formData.set("password", password);
    if (image) {
      formData.set("image", image);
      formData.set("profilePath", image.name);
    }
    setIsLoading(true);
    setValues({ ...values, error: "" });
    createUser(userId, token, formData).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
        setIsLoading(false);
      } else {
        setIsLoading(false);
        setValues({
          ...values,
          name: "",
          email: "",
          password: "",
          createdUser: data.name,
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

            <div className="col-lg-6">
              <div className="form-group">
                <label>Email</label>
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={handleChange("email")}
                />
              </div>
            </div>

            <div className="col-lg-12">
              <div className="form-group">
                <label>Password</label>
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={handleChange("password")}
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

export default UserForm;
