import React from "react";
import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Product from "./Shared/Product";

const Cart = () => {
  const cart = useSelector((state) => state.product.cart);
  let content;

  if (cart?.length === 0) {
    content = <p> Cart list is empty</p>;
  }

  if (cart?.length > 0) {
    content = (
      <Container>
        <Row>
          {cart
            .sort((a, b) => a.cartPosition - b.cartPosition)
            .map((product, i) => (
              <Product key={i} product={product} />
            ))}
        </Row>
      </Container>
    );
  }

  return <div>{content}</div>;
};

export default Cart;
