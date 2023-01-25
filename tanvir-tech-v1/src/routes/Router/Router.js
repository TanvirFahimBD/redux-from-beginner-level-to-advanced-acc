import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Cart from "../../pages/Cart";
import Home from "../../pages/Home";
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
        path: "/cart",
        element: <Cart />,
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
]);
