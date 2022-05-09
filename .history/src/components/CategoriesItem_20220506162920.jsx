import styled from "@emotion/styled";
import React from "react";

const Container = styled.div`
  padding: 20px;
  display: flex;
  width: 100vw;
`;
const Image = styled.img`
  flex: 1;
`;
const Info = styled.div``;
const Title = styled.h2``;
const CategoriesItem = (props) => {
  return (
    <Container>
      <Image src={props.item.img} />
      <Info>
        <Title>{props.item.title}</Title>
      </Info>
    </Container>
  );
};

export default CategoriesItem;
