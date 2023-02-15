import React from "react";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  addToCart,
  addToWishList,
  removeFromCart,
  removeFromWishList,
} from "../../redux/actionCreators/productActions";

const Product = ({ product }) => {
  const { pathname } = useLocation();
  const isCart = pathname.endsWith("cart");
  const isWishList = pathname.endsWith("wish-list");
  const isHome = pathname.endsWith("/");
  const isTopProducts = pathname.endsWith("top-products");
  const dispatch = useDispatch();
  const { image, model, price, status } = product;

  return (
    <Col className="my-4">
      <Card
        style={{ width: "18rem", minHeight: "570px" }}
        className="shadow-lg"
      >
        {(isCart || isWishList) && (
          <p className="bg-primary rounded-pill text-white w-25 ms-2 mt-2 p-1">
            {product?.quantity}
          </p>
        )}
        <Card.Img variant="top" src={image} style={{ minHeight: "300px" }} />
        <Card.Body>
          <Card.Title>{model}</Card.Title>
          <Card.Text>$ {price}</Card.Text>
          <Card.Text className="text-danger">
            {status ? "Stock available" : "Out of stock"}
          </Card.Text>
          {(isTopProducts || isHome) && (
            <>
              <Button
                variant="primary"
                className="m-3 "
                onClick={() => dispatch(addToCart(product))}
              >
                Add to Cart
              </Button>
              <Button
                variant="warning"
                onClick={() => dispatch(addToWishList(product))}
              >
                Add to wish list
              </Button>
            </>
          )}
          {isCart && (
            <Button
              variant="danger"
              onClick={() => dispatch(removeFromCart(product))}
            >
              Remove From Cart
            </Button>
          )}
          {isWishList && (
            <Button
              variant="danger"
              onClick={() => dispatch(removeFromWishList(product))}
            >
              Remove From WishList
            </Button>
          )}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Product;
