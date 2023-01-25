import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" container mx-auto d-flex justify-content-between rounded-pill m-2 p-2 bg-secondary">
      <div className="text-warning ms-3">Tanvir Tech</div>
      <div>
        <Link to="/" className="mx-3 text-decoration-none text-light">
          Home
        </Link>
        <Link
          to="/top-products"
          className="mx-3 text-decoration-none text-light"
        >
          Top products
        </Link>
        <Link to="/wish-list" className="mx-3 text-decoration-none text-light">
          Wish list
        </Link>
        <Link to="/cart" className="mx-3 text-decoration-none text-light">
          Cart
        </Link>
      </div>
    </div>
  );
};

export default Header;
