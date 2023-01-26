import React from "react";
import { Container, Row } from "react-bootstrap";
import { useProducts } from "../contexts/ProductProvider";
import Product from "../pages/Shared/Product";
import CartItem from "./Shared/CartItem";

const Cart = () => {
  const {
    state: { loading, products, error, cart },
  } = useProducts();

  let content;

  if (loading) {
    content = <p> Loading...</p>;
  }

  if (error) {
    content = <p> Something wrong going on...</p>;
  }

  if (products.length === 0) {
    content = <p> Products list is empty</p>;
  }

  if (products.length > 0) {
    content = (
      <Container>
        <Row>
          {cart &&
            cart.map((product, i) => (
              <CartItem key={i} product={product} cart={"cart"} />
            ))}
        </Row>
      </Container>
    );
  }

  return <div>{content}</div>;
};

export default Cart;
