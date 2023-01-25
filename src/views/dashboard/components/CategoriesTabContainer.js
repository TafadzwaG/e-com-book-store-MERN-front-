import React, { Fragment, useEffect, useState } from "react";
import BackButton from "../../../components/BackButton";
import ButtonSimple from "../../../components/ButtonSimple";
import { API } from "../../../config";
import CategoryForm from "../forms/CategortyForm";
import ReactPaginate from "react-paginate";

const CategoriesTabContainer = ({ categories }) => {
  const [create, setCreate] = useState(false);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 3;

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

  return (
    <Fragment>
      <div className="tab-pane fade" id="nav-categories" role="tabpanel">
        <div className="axil-dashboard-order">
          <div className="addrss-header d-flex align-items-center justify-content-between">
            <h4 className="title">{!create ? "Categories" : "Add Category"}</h4>
            {!create ? (
              <ButtonSimple
                name={"Create Category"}
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
                            <a className="axil-btn view-btn">View</a>
                          </td>
                        </tr>
                      </Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
              <ReactPaginate
                breakLabel="..."
                nextLabel="Next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel="< Prev"
                renderOnZeroPageCount={null}
                containerClassName="pagination"
                pageLinkClassName="page-num"
                previousLinkClassName="page-num"
                nextLinkClassName="page-num"
                activeLinkClassName="active"
              />
             
            </Fragment>
          ) : (
            <CategoryForm />
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default CategoriesTabContainer;
