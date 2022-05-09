import styled from "@emotion/styled";
import React from "react";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
const CategoriesItem = (props) => {
  return (
    <Container>
      <div>{props.item.id}</div>
    </Container>
  );
};

export default CategoriesItem;
