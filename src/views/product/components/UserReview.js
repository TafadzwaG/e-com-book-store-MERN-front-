import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import { API } from "../../../config";
import Rating from "./Rating";

export default function UserReview({ productId }) {
  
  const isComment = useSelector((state) => state.product.isCommented);
  const [comments, setComments] = useState([]);

  const getUserComment = async () => {
    const getProductReviews = await fetch(
      `${API}/comments?productId=${productId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const respData = await getProductReviews.json();
    setComments(respData.comments);
  };

  useEffect(() => {
    getUserComment();
  }, [productId, isComment]);
  return (
    <Fragment>
      {comments &&
        comments.map((comment) => (
          <li key={comment._id} className="comment">
            <div className="comment-body">
              <div className="single-comment">
                <div className="comment-img">
                  <img
                    style={{
                      width: "80px",
                    }}
                    src="/template_files/assets/images/blog/author-image-4.png"
                    alt="Author Images"
                  />
                </div>
                <div
                  className="comment-inner"
                  style={{
                    width: "100%",
                  }}
                >
                  <div
                    className="commenter"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <span>
                      <a className="hover-flip-item-wrapper" href="#">
                        <span className="hover-flip-item">
                          <span data-text="Cameron Williamson">
                            {comment.email} ({comment.name})
                          </span>
                        </span>
                      </a>
                    </span>

                    <span>
                      <Rating rating={comment.stars} numReviews={2} />
                    </span>
                  </div>
                  <div className="comment-text">
                    <p>{comment.comment}</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
    </Fragment>
  );
}
