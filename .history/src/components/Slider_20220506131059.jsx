import styled from "@emotion/styled";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React from "react";
const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
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
  widh: 100vw;
`;

const Image = styled.div`
  height: 80vh;
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Wrapper = styled.div`
  height: 100%;
`;
const InfoContainer = styled.div`
  flex: 1;
`;
const Slider = () => {
  return (
    <Container>
      <Arrow direction="left">
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper>
        <ImgContainer>
          <Image />
        </ImgContainer>
        <InfoContainer></InfoContainer>
      </Wrapper>

      <Arrow direction="right">
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
