import React from "react";
import { Link } from "react-router-dom";

const DashBoardNavbar = () => {
  return (
    <div
      className="d-flex align-items-start flex-column mb-3 bg-primary"
      style={{ minHeight: "100vh" }}
    >
      <div className="p-2">
        <Link
          to="/dashboard"
          className="mx-3 text-decoration-none d-block  text-white"
        >
          Dashboard Home
        </Link>
        <Link
          to="/dashboard/product-list"
          className="mx-3 text-decoration-none  d-block  text-white"
        >
          Product List
        </Link>
        <Link
          to="/dashboard/add-product"
          className="mx-3 text-decoration-none d-block   text-white"
        >
          Add Product
        </Link>
      </div>
      <div className="mt-auto p-2">
        <Link to="/" className="mx-3 text-decoration-none   text-white">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default DashBoardNavbar;
