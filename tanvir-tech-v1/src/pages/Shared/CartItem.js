import React from "react";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useProducts } from "../../contexts/ProductProvider";
import { actionTypes } from "../../state/ProductState/actionTypes";

const CartItem = ({ product, cart }) => {
  const { dispatch } = useProducts();
  const { image, model, price, rating, keyFeature, spec } = product;
  return (
    <Col className="my-4">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{model}</Card.Title>
          <Card.Text>${price}</Card.Text>
          {!cart && (
            <>
              <Button
                variant="primary"
                className="m-3 "
                onClick={() =>
                  dispatch({
                    type: actionTypes.ADD_TO_CART,
                    payload: product,
                  })
                }
              >
                Add to Cart
              </Button>
              <Button
                variant="warning"
                onClick={() =>
                  dispatch({
                    type: actionTypes.ADD_TO_WISH_LIST,
                    payload: product,
                  })
                }
              >
                Add to Wishlist
              </Button>
            </>
          )}
          {cart && (
            <Button
              variant="warning"
              onClick={() =>
                dispatch({
                  type: actionTypes.REMOVE_FROM_CART,
                  payload: product,
                })
              }
            >
              Remove from Cart
            </Button>
          )}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CartItem;
