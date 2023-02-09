import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import BackButton from "../../components/BackButton";
import BreadcrumbArea from "../../components/BreadcrumbArea";
import ButtonSimple from "../../components/ButtonSimple";
import { API } from "../../config";
import Layout from "../../core/Layout";
import AboutTabContainer from "./components/AboutTabContainer";
import AccountDetailsTabContainer from "./components/AccountDetailsTabContainer";
import AdvertTabContainer from "./components/AdvertTabContainer";
import CartTabContainer from "./components/CartTabContainer";
import CategoriesTabContainer from "./components/CategoriesTabContainer";
import ContactsTabContainer from "./components/ContactsTabContainer";
import DashboardTabContainer from "./components/DashboardTabContainer";
import ProductsTabContainer from "./components/ProductsTabContainer";
import TabNav from "./components/TabNav";
import TestimonialTabContainer from "./components/TestimonialTabContainer";
import UsersTabContainer from "./components/UsersTabContainer";
import WishlistTabContainer from "./components/WishlistTabContainer";
import CategoryForm from "./forms/CategortyForm";
import ProductForm from "./forms/ProductForm";

const Dashboard = () => {
  const adminUser = useSelector((state) => state.auth.user);

  const { _id, name, email, createdAt } = adminUser;
  const [create, setCreate] = useState(false);
  const [adverts, setAdverts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const handleCreate = () => {
    if (!create) {
      setCreate(true);
    } else {
      setCreate(false);
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

  const getCategories = async () => {
    const getProductsResponse = await fetch(`${API}/categories`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const responseData = await getProductsResponse.json();
    return responseData.data;
  };

  const getProducts = async () => {
    const getProductsResponse = await fetch(`${API}/all-products`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseData = await getProductsResponse.json();

    console.log("Products", responseData.data);
    setProducts(responseData.data);
  };

  useEffect(() => {
    getAdverts();
    getProducts();
    getCategories()
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Fragment>
      <Layout>
        <BreadcrumbArea location={"Dashboard"} title={"Admin Dashboard"} />
        <div className="axil-dashboard-area axil-section-gap">
          <div className="container">
            <div className="axil-dashboard-warp">
              <div className="axil-dashboard-author">
                <div className="media">
                  <div className="thumbnail">
                    <img
                      src="/template_files/assets/images/product/author1.png"
                      alt="Hello Annie"
                    />
                  </div>
                  <div className="media-body">
                    <h5 className="title mb-0">{name}</h5>
                    <span className="joining-date">eTrade Member Since {}</span>
                  </div>
                </div>
              </div>
              <div className="row">
                <TabNav />
                <div className="col-xl-9 col-md-8">
                  <div className="tab-content">
                    <DashboardTabContainer />
                    <UsersTabContainer />
                    <ProductsTabContainer products={products} />
                    <CategoriesTabContainer categories={categories} />
                    <TestimonialTabContainer />
                    <AdvertTabContainer />
                    <ContactsTabContainer />
                    <AboutTabContainer />
                    <CartTabContainer />
                    <WishlistTabContainer />
                    <AccountDetailsTabContainer />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </Fragment>
  );
};

export default Dashboard;
