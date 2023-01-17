import React, { Fragment, useEffect, useState } from "react";
import BackButton from "../../../components/BackButton";
import ButtonSimple from "../../../components/ButtonSimple";
import { API } from "../../../config";
import AdvertForm from "../forms/AdvertForm";

const AdvertTabContainer = () => {
  const [adverts, setAdverts] = useState([]);
  const [create, setCreate] = useState(false);

  const handleCreate = () => {
    if (!create) {
      setCreate(true);
    } else {
      setCreate(false);
      getAdverts();
    }
  };

  const getAdverts = async () => {
    const getAdvertsResponse = await fetch(`${API}/adverts`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseData = await getAdvertsResponse.json();

    console.log("Advert", responseData.data);
    setAdverts(responseData.data);
  };

  useEffect(() => {
    getAdverts();
  }, []);
  return (
    <Fragment>
      <div className="tab-pane fade" id="nav-advert" role="tabpanel">
        <div className="axil-dashboard-order">
          <div className="addrss-header d-flex align-items-center justify-content-between">
            <h4 className="title">{!create ? "Advert" : "Add Advert"}</h4>
            {!create ? (
              <ButtonSimple name={"Create Advert"} btnFunction={handleCreate} />
            ) : (
              <BackButton btnFuction={handleCreate} />
            )}
          </div>
          {!create ? (
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Sub_Title</th>
                    <th scope="col">Image</th>

                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {adverts.map((advert) => (
                    <Fragment key={advert._id}>
                      <tr>
                        <th scope="row">{advert.title}</th>
                        <th scope="row">{advert.sub_title}</th>
                        <th scope="row">
                          {!advert.imagePath ? (
                            <div className="thumbnail">
                              <img
                                style={{ borderRadius: "50%" }}
                                src="/template_files/assets/images/product/author1.png"
                                alt="Hello Annie"
                              />
                            </div>
                          ) : (
                            <div className="thumbnail">
                              <img
                                 style={{ borderRadius: "50%" , width: "100px"}}
                                src={`http://localhost:8000/assets/${advert.imagePath}`}
                                alt="Hello Annie"
                              />
                            </div>
                          )}
                        </th>

                        <td>
                          <a className="axil-btn view-btn">View</a>
                        </td>
                      </tr>
                    </Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <AdvertForm />
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default AdvertTabContainer;
