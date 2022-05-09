import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 60px;
  background-color: chocolate;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
`;
const Left = styled.div``;

const Center = styled.div``;
const Right = styled.div``;
const NavBar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>left</Left>
        <Center>center</Center>
        <Right>Right</Right>
      </Wrapper>
    </Container>
  );
};

export default NavBar;
