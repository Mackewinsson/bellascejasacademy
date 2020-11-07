import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import axios from "axios";

const Homescreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };
    fetchProducts();
  }, []);

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
      <Row>{productRender}</Row>
    </>
  );
};

export default Homescreen;
