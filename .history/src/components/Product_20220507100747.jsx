import styled from "@emotion/styled";
import React from "react";
import { popularProducts } from "./data";

const Container = styled.div``;
const Product = () => {
  return (
    <Container>
      {popularProducts.map((props) => (
        <h1></h1>
      ))}
    </Container>
  );
};

export default Product;
