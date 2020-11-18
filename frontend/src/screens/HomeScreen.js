import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";

const Homescreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  // Map over data
  const productRender = products.map((product) => {
    return (
      <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
        <Product product={product} />
      </Col>
    );
  });
  // End maping over data

  return (
    <>
      <h1>Latest Products</h1>
      {loading ? (
        <h2>Loading</h2>
      ) : error ? (
        <h3>{error} </h3>
      ) : (
        <Row>{productRender}</Row>
      )}
    </>
  );
};

export default Homescreen;
