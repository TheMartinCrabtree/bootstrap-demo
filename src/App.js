import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.scss";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { Cart } from "./components/Cart";
import { Card } from "./components/Card";
import styled from "styled-components";

import ships from "./data.json";

const BackgroundWrapper = styled.div`
  background-color: black;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  const [index, setIndex] = useState(0);

  const _renderCards = (dataArr) => {
    return dataArr.map((data) => {
      return (
        <Carousel.Item interval={200000}>
          <CardWrapper>
            <Card {...data} />
          </CardWrapper>
        </Carousel.Item>
      );
    });
  };

  const _handleSelect = (cardIndex, event) => {
    setIndex(cardIndex);
  };

  return (
    <BackgroundWrapper>
      <Container>
        <header>
          <h1>Eve Online Shop Demo</h1>
        </header>
        <Row>
          <Carousel activeIndex={index} onSelect={_handleSelect}>
            {ships && _renderCards(ships)}
          </Carousel>
        </Row>
      </Container>
    </BackgroundWrapper>
  );
}

export default App;
