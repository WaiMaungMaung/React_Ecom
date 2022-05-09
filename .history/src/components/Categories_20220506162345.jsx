import styled from "@emotion/styled";
import React from "react";
import CategoriesItem from "./CategoriesItem";
import { categories } from "./data";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoriesItem item={item} />
      ))}
    </Container>
  );
};

export default Categories;
