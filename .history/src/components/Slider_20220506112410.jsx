import styled from "@emotion/styled";
import { ArrowLeftOutlined } from "@material-ui/icons";
import React from "react";
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;
const Arrow = styled.div``;
const Slider = () => {
  return (
    <Container>
      <Arrow>
        <ArrowLeftOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
