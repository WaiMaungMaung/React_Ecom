import styled from "@emotion/styled";
import React from "react";
import CategoriesItem from "./CategoriesItem";
import { categories } from "./data";

const Container = styled.div``;
const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <Categories></Categories>);
      )}
    </Container>
  );
};

export default Categories;
