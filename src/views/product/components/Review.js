import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../../../components/Loading";
import { API } from "../../../config";
import { productActions } from "../../../redux-store/products-store";

export default function Review({ productIdProp }) {
  const userId = useSelector((state) => state.auth.userId);
  const token = useSelector((state) => state.auth.token);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [values, setValues] = useState({
    name: "",
    stars: 1,
    comment: "",
    email: "",
    loading: false,
    productId: productIdProp,
    user: userId,
    error: "",
    CommentSubmitted: false,
  });

  const { name, stars, email, error, comment, loading, CommentSubmitted } =
    values;

  const postComment = async (commentData) => {
    return await fetch(`${API}/comment/create/${userId}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(commentData),
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const onSubmitComment = (e) => {
    toast.info("Comment Submited");
    e.preventDefault();
    setValues({ ...values, loading: true });
    if (!token) {
      navigate("/signin");
    } else {
      postComment(values).then((data) => {
        if (data.error || data.errors) {
          setValues({
            ...values,
            error: data.error || data.errors,
            loading: false,
          });
        } else {
          setValues({
            name: "",
            stars: "",
            productId: productIdProp,
            comment: "",
            user: userId,
            email: "",
            loading: false,
            error: "",
            CommentSubmitted: true,
          });

          dispatch(productActions.setIsComented(true));
        }
      });
    }
  };

  return (
    <div className="comment-respond pro-des-commend-respond mt--0">
      <h5 className="title mb--30">Add a Review</h5>
      <p>
        Your email address will not be published. Required fields are marked *
      </p>
      <div className="rating-wrapper d-flex-center mb--40">
        Your Rating <span className="require">*</span>
        <div className="reating-inner ml--20">
          <a href="#">
            <i className="fal fa-star"></i>
          </a>
          <a href="#">
            <i className="fal fa-star"></i>
          </a>
          <a href="#">
            <i className="fal fa-star"></i>
          </a>
          <a href="#">
            <i className="fal fa-star"></i>
          </a>
          <a href="#">
            <i className="fal fa-star"></i>
          </a>
        </div>
      </div>

      <form onSubmit={onSubmitComment}>
        <div className="row">
          <div className="col-lg-3 col-md-4 col-6">
            <div className="form-group">
              <label>
                Stars <span className="require">*</span>{" "}
              </label>
              <input
                id="stars"
                type="number"
                name="stars"
                value={stars}
                onChange={handleChange("stars")}
                max={5}
                min={1}
              />
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <label>Other Notes (optional)</label>
              <textarea
                name="comment"
                placeholder="Your Comment"
                value={comment}
                onChange={handleChange("comment")}
              ></textarea>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div className="form-group">
              <label>
                Name <span className="require">*</span>
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={name}
                onChange={handleChange("name")}
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div className="form-group">
              <label>
                Email <span className="require">*</span>{" "}
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={email}
                onChange={handleChange("email")}
              />
            </div>
          </div>

          {loading ? (
            <Loading />
          ) : (
            <div className="col-lg-12">
              <div className="form-submit">
                <button
                  type="submit"
                  id="submit"
                  className="axil-btn btn-bg-primary w-auto"
                >
                  Submit Comment
                </button>
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
