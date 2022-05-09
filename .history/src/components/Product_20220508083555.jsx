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
  background-color: teal;
  position: relative;
`;
const Image = styled.img`
  height: 75%;
  z-index: 2;
`;
const Info = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: grey;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Circle = styled.div`
  width: 200px;
  height: 200px;
  background-color: #bbaacc;
  border-radius: 50%;
  position: absolute;
`;
const Icon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
`;
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
