import React, { Fragment, useEffect, useState } from "react";
import BackButton from "../../../components/BackButton";
import ButtonSimple from "../../../components/ButtonSimple";
import { API } from "../../../config";
import CategoryForm from "../forms/CategortyForm";

import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";

const CategoriesTabContainer = ({ categories }) => {
  const userId = useSelector((state) => state.auth.user._id);
  const token = useSelector((state) => state.auth.token);

  const [create, setCreate] = useState(false);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 3;
  const [isEdit, setIsEdit] = useState(false);
  const [idForEdit, setIdForEdit] = useState(null);

  const handleCreate = () => {
    if (!create) {
      setCreate(true);
    } else {
      setCreate(false);
    }
  };

  useEffect(() => {
    if (categories.length !== 0) {
      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(categories.slice(itemOffset, endOffset));
      console.log(`Loading items from ${itemOffset} to ${endOffset}`);
      setPageCount(Math.ceil(categories.length / itemsPerPage));
    }
  }, [itemOffset, itemsPerPage, categories]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % categories.length;
    setItemOffset(newOffset);
  };

  const deleteCategory = async (categoryId) => {
    const deleteCategoryResponse = await fetch(
      `${API}/category/${categoryId}/${userId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const responseData = await deleteCategoryResponse.json();    
    return responseData;
  };

  const onEditClick = (itemId) => {
    if (!isEdit) {
      setIsEdit(true);
      setIdForEdit(itemId);
    } else {
      setIsEdit(false);
    }
  };

  const clickBack = () => {
    setIsEdit(false);
    if (isEdit) {
      setIsEdit(false);
    }
  };

  return (
    <Fragment>
      <div className="tab-pane fade" id="nav-categories" role="tabpanel">
        {!isEdit ? (
          <div className="axil-dashboard-order">
            <div className="addrss-header d-flex align-items-center justify-content-between">
              <h4 className="title">
                {!create ? "Categories" : "Add Category"}
              </h4>
              {!create ? (
                <ButtonSimple
                  name={"CREATE CATEGORY"}
                  btnFunction={handleCreate}
                />
              ) : (
                <BackButton btnFuction={handleCreate} />
              )}
            </div>
            {!create ? (
              <Fragment>
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Image</th>
                        <th scope="col">CreatedAt</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentItems.map((category) => (
                        <Fragment key={category._id}>
                          <tr>
                            <th scope="row">{category.name}</th>
                            <th scope="row">{category.description}</th>
                            <th scope="row">
                              {!category.imagePath ? (
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
                                    style={{
                                      borderRadius: "50%",
                                      width: "100px",
                                    }}
                                    src={`http://localhost:8000/assets/${category.imagePath}`}
                                    alt="Image"
                                  />
                                </div>
                              )}
                            </th>
                            <th scope="row">{category.createdAt}</th>

                            <td>
                              <Fragment>
                                <div
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-around",
                                    width: "100px",
                                    cursor: "pointer",
                                    alignItems: "flex-end",
                                  }}
                                  className="dashboard-action"
                                >
                                  <i className="fa fa-eye"></i>
                                  <i
                                    className="fa fa-pencil"
                                    onClick={() => onEditClick(category._id)}
                                  ></i>
                                  <i
                                    className="fa fa-trash"
                                    onClick={() => deleteCategory(category._id)}
                                  ></i>
                                </div>
                              </Fragment>
                            </td>
                          </tr>
                        </Fragment>
                      ))}
                    </tbody>
                  </table>
                </div>
                <ReactPaginate
                  breakLabel="..."
                  nextLabel={<i className="fa fa-angle-right"></i>}
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={3}
                  pageCount={pageCount}
                  previousLabel={<i className="fa fa-angle-left"></i>}
                  renderOnZeroPageCount={null}
                  containerClassName="pagination"
                  pageLinkClassName="page-num"
                  previousLinkClassName="page-num"
                  nextLinkClassName="page-num"
                  activeLinkClassName="active"
                />
              </Fragment>
            ) : (
              <CategoryForm isEdit={isEdit} itemId={idForEdit} />
            )}
          </div>
        ) : (
          <Fragment>
            <div className="axil-dashboard-order">
              <div className="addrss-header d-flex align-items-center justify-content-between">
                <h4 className="title">Edit Category</h4>
                <BackButton btnFuction={clickBack} />
              </div>
            </div>
            <div>
              <CategoryForm isEdit={isEdit} itemId={idForEdit} />
            </div>
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};

export default CategoriesTabContainer;
