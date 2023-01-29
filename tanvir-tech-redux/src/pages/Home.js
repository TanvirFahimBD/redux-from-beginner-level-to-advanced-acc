import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Product from "./Shared/Product";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fake-api.up.railway.app/pcProducts")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const state = useSelector((state) => state);
  console.log("state", state);

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

  return <div>{content}</div>;
};

export default Home;
