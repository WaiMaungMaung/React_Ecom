import styled from "@emotion/styled";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React from "react";
import Clothes from "../img/clothes.png";
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
`;
const Slide = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

const Image = styled.img`
  height: 80%;
`;
const ImgContainer = styled.div`
  height: 100%;
  margin-left: 120px;
  flex: 1;
`;
const Wrapper = styled.div`
  height: 100%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 200px;
`;

const Title = styled.h1``;
const Desc = styled.p``;
const Button = styled.button``;
const Slider = () => {
  return (
    <Container>
      <Arrow direction="left">
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper>
        <Slide>
          <ImgContainer>
            <Image src={Clothes} />
          </ImgContainer>
          <InfoContainer>
            <Title>MEN FASHION</Title>
            <Desc>YOU CAN GET THE DESIGN FOR YOUR FASHION!!</Desc>
            <Button>SHOP NOW</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>

      <Arrow direction="right">
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
