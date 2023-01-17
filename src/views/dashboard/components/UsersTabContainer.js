import React, { Fragment, useEffect, useState } from "react";
import BackButton from "../../../components/BackButton";
import ButtonSimple from "../../../components/ButtonSimple";
import UserForm from "../forms/UserForm";

const UsersTabContainer = () => {
  const [create, setCreate] = useState(false);
  const [users, setUsers] = useState([]);

  const handleCreate = () => {
    if (!create) {
      setCreate(true);
    } else {
      setCreate(false);
      getAdverts();
    }
  };

  const getUsers = async () => {
    const getUsersResponse = await fetch(`${API}/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseData = await getUsersResponse.json();

    console.log("Users", responseData.data);
    setUsers(responseData.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Fragment>
      <div className="tab-pane fade" id="nav-users" role="tabpanel">
        <div className="axil-dashboard-order">
          <div className="addrss-header d-flex align-items-center justify-content-between">
            <h4 className="title">{!create ? "Users" : "Add User"}</h4>
            {!create ? (
              <ButtonSimple name={"Create User"} btnFunction={handleCreate} />
            ) : (
              <BackButton btnFuction={handleCreate} />
            )}
          </div>

          {!create ? (
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Order</th>
                    <th scope="col">Date</th>
                    <th scope="col">Status</th>
                    <th scope="col">Total</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">#6523</th>
                    <td>September 10, 2020</td>
                    <td>Processing</td>
                    <td>$326.63 for 3 items</td>
                    <td>
                      <a href="#" className="axil-btn view-btn">
                        View
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ) : (
            <UserForm />
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default UsersTabContainer;
