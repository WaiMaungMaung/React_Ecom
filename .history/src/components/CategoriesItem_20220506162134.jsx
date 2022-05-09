import styled from "@emotion/styled";
import React from "react";

const Container = styled.div`
  display: flex;
`;
const CategoriesItem = (props) => {
  return <div>{props.item.id}</div>;
};

export default CategoriesItem;
