import React, { Fragment, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";
import BackButton from "../../../components/BackButton";
import ButtonSimple from "../../../components/ButtonSimple";
import { API } from "../../../config";
import ProductForm from "../forms/ProductForm";

const ProductsTabContainer = ({ products }) => {
  const [create, setCreate] = useState(false);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [isEdit, setIsEdit] = useState(false);
  const [idForEdit, setIdForEdit] = useState(null);

  const itemsPerPage = 3;

  const token = useSelector((state) => state.auth.token);
  const userId = useSelector((state) => state.auth.user._id);

  const handleCreate = () => {
    if (!create) {
      setCreate(true);
    } else {
      setCreate(false);
    }
  };

  useEffect(() => {
    if (products.length !== 0) {
      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(products.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(products.length / itemsPerPage));
    }
  }, [itemOffset, itemsPerPage, products]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
  };

  const deleteProduct = async (productId) => {
    const deleteCategoryResponse = await fetch(
      `${API}/product/${productId}/${userId}`,
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
    <div className="tab-pane fade" id="nav-products" role="tabpanel">
      {!isEdit ? (
        <Fragment>
          <div className="axil-dashboard-order">
            <div className="addrss-header d-flex align-items-center justify-content-between">
              <h4 className="title">{!create ? "Products" : "Add Product"}</h4>
              {!create ? (
                <ButtonSimple
                  name={"CREATE PRODUCT"}
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
                        <th scope="col">Price</th>
                        <th scope="col">In Stock</th>
                        <th scope="col">Sold</th>
                        <th scope="col">Image</th>
                        <th scope="col">CreatedAt</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentItems &&
                        currentItems.map((product) => (
                          <Fragment key={product._id}>
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
                                      style={{
                                        borderRadius: "50%",
                                        width: "100px",
                                      }}
                                      src={`http://localhost:8000/assets/${product.imagePath}`}
                                      alt="Image"
                                    />
                                  </div>
                                )}
                              </td>
                              <td>{product.createdAt}</td>
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
                                      onClick={() => onEditClick(product._id)}
                                    ></i>
                                    <i
                                      className="fa fa-trash"
                                      onClick={() => deleteProduct(product._id)}
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
              <ProductForm isEdit={isEdit} itemId={idForEdit} />
            )}
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <div className="axil-dashboard-order">
            <div className="addrss-header d-flex align-items-center justify-content-between">
              <h4 className="title">Edit Product</h4>
              <BackButton btnFuction={clickBack} />
            </div>
          </div>
          <div>
            <ProductForm isEdit={isEdit} itemId={idForEdit} />
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default ProductsTabContainer;
