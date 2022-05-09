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

  position: relative;
  width: 30vw;
`;
const Image = styled.img`
  display: flex;
  width: 100%;
  height: 100%;
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  justify-content: center;
  width: 100%;
  background-color: brown;
`;
const Circle = styled.div``;
const Icon = styled.span``;
const Product = (props) => {
  return (
    <Container>
      <Circle>
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
      </Circle>
    </Container>
  );
};

export default Product;
