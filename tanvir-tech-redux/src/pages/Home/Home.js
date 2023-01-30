import React from "react";
import { Container, Row } from "react-bootstrap";
import { useProducts } from "../../hooks/useProductsAll";
import Product from "../Shared/Product";
import "./Home.css";

const Home = () => {
  const products = useProducts();

  let content;

  if (products?.length === 0) {
    content = <p> Products list is empty</p>;
  }

  if (products?.length > 0) {
    content = (
      <Container>
        <Row>
          {products?.map((product, i) => (
            <Product key={i} product={product} />
          ))}
        </Row>
      </Container>
    );
  }

  return (
    <div>
      <Container className="text-end">
        <span className="mx-2 border rounded-pill shadow-lg p-2  btn btn-primary">
          In Stock
        </span>
        <span className="mx-2 border rounded-pill shadow-lg p-2">AMD</span>
        <span className="ms-2 me-5 border rounded-pill shadow-lg p-2">
          Intel
        </span>
      </Container>
      {content}
    </div>
  );
};

export default Home;
