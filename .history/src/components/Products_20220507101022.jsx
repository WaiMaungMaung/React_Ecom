import styled from "@emotion/styled";
import React from "react";
import { popularProducts } from "./data";
import Product from "./Product";

const Container = styled.div``;
const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} keu={item.id}></Product>
      ))}
    </Container>
  );
};

export default Products;
