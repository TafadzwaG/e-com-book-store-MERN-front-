import React, { Fragment, useEffect, useState } from "react";
import BackButton from "../../../components/BackButton";
import ButtonSimple from "../../../components/ButtonSimple";
import { API } from "../../../config";
import CategoryForm from "../forms/CategortyForm";
import ReactPaginate from "react-paginate";

const CategoriesTabContainer = () => {
  const [categories, setCategories] = useState([]);
  const [create, setCreate] = useState(false);
  const handleCreate = () => {
    if (!create) {
      setCreate(true);
    } else {
      setCreate(false);
      getCategories();
    }
  };

  const getCategories = async () => {
    const getProductsResponse = await fetch(`${API}/categories`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseData = await getProductsResponse.json();
    console.log("Categories", responseData);
    setCategories(responseData.data);
  };

  useEffect(() => {
    getCategories();
  }, []);

  const pageCount = Math.ceil(categories.length / 3);

  const handlePageClick = () => {
    
  }

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
                  {categories.map((category) => (
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
                                style={{ borderRadius: "50%", width: "100px" }}
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
                  {/* <ReactPaginate
                        breakLabel="..."
                        nextLabel="next >"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={pageCount}
                        previousLabel="< previous"
                        renderOnZeroPageCount={null}
                      /> */}
                </tbody>
              </table>
            </div>
          ) : (
            <CategoryForm />
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default CategoriesTabContainer;
