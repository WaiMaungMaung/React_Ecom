import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { Badge } from "@mui/material";
const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  align-item: center;
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
  margin-left: 20px;
`;

const Language = styled.span`
  font-size: 25px;
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

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-item: center;
  justify-content: flex-end;
`;
const NavBar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <SearchContainer>
            <Language>Text</Language>
            <Input />
            <Search style={{ color: "grey", fontSize: "14px" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>LayLa</Logo>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>SignIn</MenuItem>

          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined color="action" />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default NavBar;
