import React from "react";
import { Container, Row } from "react-bootstrap";
import { useProducts } from "../contexts/ProductProvider";
import Product from "./Shared/Product";

const WishList = () => {
  const {
    state: { loading, products, error, wishList },
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
          {wishList &&
            wishList.map((product, i) => (
              <Product key={i} product={product} wish={"wish"} />
            ))}
        </Row>
      </Container>
    );
  }

  return <div>{content}</div>;
};

export default WishList;
