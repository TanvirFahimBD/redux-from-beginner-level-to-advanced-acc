import React from "react";
import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import About from "../../pages/About";
import Cart from "../../pages/Cart";
import AddProduct from "../../pages/Dashboard/AddProduct";
import Dashboard from "../../pages/Dashboard/Dashboard";
import ProductList from "../../pages/Dashboard/ProductList";
import Home from "../../pages/Home/Home";
import NotFoundPage from "../../pages/Shared/NotFoundPage";
import TopProducts from "../../pages/TopProducts";
import WishList from "../../pages/WishList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/top-products",
        element: <TopProducts />,
      },
      {
        path: "/wish-list",
        element: <WishList />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/product-list",
        element: <ProductList />,
      },
      {
        path: "/dashboard/add-product",
        element: <AddProduct />,
      },
    ],
  },
]);
