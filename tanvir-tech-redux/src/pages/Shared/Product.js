import React from "react";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  addToCart,
  removeFromCart,
} from "../../redux/actionCreators/productActions";

const Product = ({ product }) => {
  const { pathname } = useLocation();
  const isCart = pathname.endsWith("cart");
  const dispatch = useDispatch();
  const { image, model, price } = product;

  return (
    <Col className="my-4">
      <Card style={{ width: "18rem" }} className="shadow-lg">
        {isCart && (
          <p className="bg-primary rounded-pill text-white w-25 ms-2 mt-2 p-1">
            {product?.quantity}
          </p>
        )}
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{model}</Card.Title>
          <Card.Text>$ {price}</Card.Text>
          {!isCart && (
            <>
              <Button
                variant="primary"
                className="m-3 "
                onClick={() => dispatch(addToCart(product))}
              >
                Add to Cart
              </Button>
              <Button variant="warning">Add to wish list</Button>
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
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Product;
