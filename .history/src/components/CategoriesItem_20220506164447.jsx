import styled from "@emotion/styled";
import React from "react";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Button = styled.button`
  background-color: transparent;
`;
const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
`;
const Title = styled.h1`
  color: white;
`;
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
