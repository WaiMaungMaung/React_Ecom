import styled from "@emotion/styled";
import {
  Favorite,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import React from "react";
import { popularProducts } from "./data";

const Container = styled.div`
  flex: 1;
  min-width: 280px;
  margin: 10px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #aabbcc;
`;
const Image = styled.img`
  height: 75%;
`;
const Info = styled.div``;
const Circle = styled.div`
  width: 200px;
  height: 200px;
  background-color: #bbaacc;
  border-radius: 50%;
  position: absolute;
  zindex: -2;
`;
const Icon = styled.div``;
const Product = (props) => {
  return (
    <Container>
      <Circle />
      <Image src={props.item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <Favorite />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
