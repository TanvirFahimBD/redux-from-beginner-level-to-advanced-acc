import React from "react";
import { Container, Row } from "react-bootstrap";
import { useProducts } from "../hooks/useProductsAll";
import Product from "./Shared/Product";
const TopProducts = () => {
  const products = useProducts();
  let content;

  if (products?.length === 0) {
    content = <p> Products list is empty</p>;
  }

  if (products?.length > 0) {
    content = (
      <Container>
        <Row>
          {products
            ?.filter((p) => p.rating >= 4)
            .map((product, i) => (
              <Product key={i} product={product} />
            ))}
        </Row>
      </Container>
    );
  }

  return <div>{content}</div>;
};

export default TopProducts;
