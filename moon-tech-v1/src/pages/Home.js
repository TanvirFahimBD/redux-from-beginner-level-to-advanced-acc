import React from "react";
import { Container, Row } from "react-bootstrap";
import { useProducts } from "../contexts/ProductProvider";
import Product from "./Shared/Product";

const Home = () => {
  const { products } = useProducts();
  console.log("products", products);
  return (
    <Container>
      <Row>
        {products.map((product, i) => (
          <Product key={i} product={product} />
        ))}
      </Row>
    </Container>
  );
};

export default Home;
