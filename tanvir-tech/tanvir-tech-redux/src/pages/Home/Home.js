import React from "react";
import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useProducts } from "../../hooks/useProductsAll";
import {
  toggleFilter,
  toggleStock,
} from "../../redux/actionCreators/filterActions";
import Product from "../Shared/Product";
import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();
  const { brands, stock } = useSelector((state) => state.filter.filters);

  const products = useProducts();

  let content;

  if (products?.length === 0) {
    content = <p> Products list is empty</p>;
  }

  if (products?.length > 0) {
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

  if (products?.length > 0 && (stock || brands.length)) {
    content = (
      <Container>
        <Row>
          {products
            .filter((pd) => {
              if (stock) {
                return pd.status === stock;
              }
              return pd;
            })
            .filter((pd) => {
              if (brands.length) {
                return brands.includes(pd.brand);
              }
              return pd;
            })
            .map((product, i) => (
              <Product key={i} product={product} />
            ))}
        </Row>
      </Container>
    );
  }

  return (
    <div>
      <Container className="text-end">
        <button
          className={`${
            stock ? " btn btn-primary " : ""
          }  mx-2 border rounded-pill shadow-lg p-2`}
          onClick={() => dispatch(toggleStock())}
        >
          In Stock
        </button>
        <button
          className={`${
            brands.includes("amd") ? " btn btn-primary " : ""
          } mx-2 border rounded-pill shadow-lg p-2`}
          onClick={() => dispatch(toggleFilter("amd"))}
        >
          AMD
        </button>
        <button
          className={`${
            brands.includes("intel") ? " btn btn-primary " : ""
          } mx-2 border rounded-pill shadow-lg p-2`}
          onClick={() => dispatch(toggleFilter("intel"))}
        >
          Intel
        </button>
      </Container>
      {content}
    </div>
  );
};

export default Home;
