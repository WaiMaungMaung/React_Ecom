import styled from "@emotion/styled";
import React from "react";
import { popularProducts } from "./data";

const Container = styled.div`
  flex: 1;
`;
const Image = styled.img`
  display: flex;
  width: 100%;
  height: 100%;
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
