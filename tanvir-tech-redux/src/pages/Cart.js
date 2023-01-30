import React from "react";
import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Product from "./Shared/Product";

const Cart = () => {
  const location = useLocation();
  const path = location.pathname;
  const isCart = path.endsWith("cart");

  const cart = useSelector((state) => state.cart);
  let content;

  if (cart?.length === 0) {
    content = <p> Products list is empty</p>;
  }

  if (cart?.length > 0) {
    content = (
      <Container>
        <Row>
          {cart?.map((product, i) => (
            <Product key={i} product={product} isCart={isCart} />
          ))}
        </Row>
      </Container>
    );
  }

  return <div>{content}</div>;
};

export default Cart;
