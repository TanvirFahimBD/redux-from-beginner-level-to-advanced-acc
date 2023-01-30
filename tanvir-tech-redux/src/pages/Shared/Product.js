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
  const dispatch = useDispatch();
  const { image, model, price } = product;

  return (
    <Col className="my-4">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{model}</Card.Title>
          <Card.Text>$ {price}</Card.Text>
          <Button
            variant="primary"
            className="m-3 "
            onClick={() => dispatch(addToCart(product))}
          >
            Add to Cart
          </Button>
          <Button
            variant="warning"
            onClick={() => dispatch(removeFromCart(product))}
          >
            Remove From Cart
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Product;
