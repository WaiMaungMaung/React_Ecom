import styled from "@emotion/styled";
import React from "react";

const Container = styled.div``;
const Image = styled.img`
  width: 10%;
`;
const Button = styled.button``;
const Info = styled.div``;
const Title = styled.h1``;
const CategoriesItem = (props) => {
  return (
    <Container>
      <Image src={props.item.img} />
      <Info>
        <Title>{props.item.title}</Title>
        <Button>Shop Now</Button>
      </Info>
    </Container>
  );
};

export default CategoriesItem;
