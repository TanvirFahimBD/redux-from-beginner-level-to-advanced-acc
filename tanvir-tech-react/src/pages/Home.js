import React from "react";
import { Container, Row } from "react-bootstrap";
import { useProducts } from "../contexts/ProductProvider";
import Product from "./Shared/Product";

const Home = () => {
  const {
    state: { loading, products, error },
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
          {products.map((product, i) => (
            <Product key={i} product={product} />
          ))}
        </Row>
      </Container>
    );
  }

  return <div>{content}</div>;
};

export default Home;
