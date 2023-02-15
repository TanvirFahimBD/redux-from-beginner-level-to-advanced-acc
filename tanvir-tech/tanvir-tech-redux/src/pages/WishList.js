import React from "react";
import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Product from "./Shared/Product";

const WishList = () => {
  const wishList = useSelector((state) => state.product.wishList);
  let content;

  if (wishList?.length === 0) {
    content = <p> Wish list is empty !!!</p>;
  }

  if (wishList?.length > 0) {
    content = (
      <Container>
        <Row>
          {wishList
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

export default WishList;
