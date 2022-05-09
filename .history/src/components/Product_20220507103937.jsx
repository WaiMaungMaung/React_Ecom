import styled from "@emotion/styled";
import { ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import { popularProducts } from "./data";

const Container = styled.div`
  flex: 1;
  width: 30vw;
`;
const Image = styled.img`
  display: flex;
  width: 100%;
  height: 100%;
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
