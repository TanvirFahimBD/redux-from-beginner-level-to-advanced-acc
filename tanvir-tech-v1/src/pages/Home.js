import React from "react";
import { Container, Row } from "react-bootstrap";
import { useProducts } from "../contexts/ProductProvider";
import Product from "./Shared/Product";

const Home = () => {
  const {
    state: { loading, products, error },
  } = useProducts();

  if (loading) {
    return <p> Loading...</p>;
  }

  console.log("products", products);

  if (products.length > 0) {
    return (
      <Container>
        <Row>
          {products.map((product, i) => (
            <Product key={i} product={product} />
          ))}
        </Row>
      </Container>
    );
  }
};

export default Home;
