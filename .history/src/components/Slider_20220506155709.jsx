import styled from "@emotion/styled";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import { sliderItems } from "./data";
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
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
  z-index: 2;
`;
const Slide = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  align-item: center;
  background-color: ${(props) => props.bg};
`;

const Image = styled.img`
  height: 80%;
`;
const ImgContainer = styled.div`
  height: 100%;
  margin-left: 120px;
  margin-top: 30px;
  flex: 1;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 4s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
const InfoContainer = styled.div`
  flex: 1;
  padding-top: 250px;
`;

const Title = styled.h1`
  font-size: 50px;
`;
const Desc = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 20px;
  background-color: transparent;
  font-weight: bolder;
  border-radius: 20px;
`;
const Slider = () => {
  const [slideIndex, setSldeIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSldeIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSldeIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>
                {item.id}
                {item.title}
              </Title>
              <Desc>{item.desc}</Desc>
              <Button>SHOP NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
