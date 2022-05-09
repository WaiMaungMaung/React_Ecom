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
  align-item: center;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
`;

const Center = styled.div`
  flex: 1;
`;

const Logo = styled.h1`
  font-weight: bold;
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
        <Center>
          <Logo>LayLa</Logo>
        </Center>
        <Right>Right</Right>
      </Wrapper>
    </Container>
  );
};

export default NavBar;
