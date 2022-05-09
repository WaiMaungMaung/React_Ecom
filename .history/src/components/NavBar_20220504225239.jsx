import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
const Container = styled.div`
  height: 60px;
  background-color: #afafaa;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
`;

const Center = styled.div`
  flex: 1;
`;
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
