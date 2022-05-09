import { Search } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
const Container = styled.div`
  height: 60px;
  background-color: #afafaa;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  margin-left: 25px;
  display: flex;
  align-center: center;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
`;

const Language = styled.span``;
const Left = styled.div`
  flex: 1;
  align
`;

const Center = styled.div`
  flex: 1;
`;
const Right = styled.div``;
const NavBar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <SearchContainer>
            <Language>Text</Language>
            <Input />
            <Search />
          </SearchContainer>
        </Left>
        <Center>center</Center>
        <Right>Right</Right>
      </Wrapper>
    </Container>
  );
};

export default NavBar;
