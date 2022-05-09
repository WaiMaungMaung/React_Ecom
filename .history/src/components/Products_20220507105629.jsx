import styled from "@emotion/styled";
import React from "react";
import { popularProducts } from "./data";
import Product from "./Product";

const Container = styled.div`
  display: flex;
`;
const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
