import styled from "@emotion/styled";
import React from "react";

const Container = styled.div`
  padding: 20px;
`;
const CategoriesItem = (props) => {
  return (
    <Container>
      <div>{props.item.id}</div>
    </Container>
  );
};

export default CategoriesItem;
