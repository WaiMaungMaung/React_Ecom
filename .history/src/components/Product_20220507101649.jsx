import styled from "@emotion/styled";
import React from "react";
import { popularProducts } from "./data";

const Container = styled.div``;
const Image = styled.img`
  height: 100vh;
`;
const Product = (props) => {
  return (
    <Container>
      {props.item.id}
      <Image src={props.item.img} />
    </Container>
  );
};

export default Product;
