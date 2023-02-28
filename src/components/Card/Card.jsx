import React from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import styled from "styled-components";

const CardContainer = styled.div`
  min-height: 800px;
`;

const Card = (props) => {
  const { id, name, image, info, price } = props;
  // debugger;

  return (
    <Toast id={id}>
      <CardContainer>
        <Toast.Header>
          <strong className="temp">Ship: {name}</strong>
        </Toast.Header>
        {name && (
          <Toast.Body>
            <img src={require(`../../images/${name}.jpg`)} alt={name} />
          </Toast.Body>
        )}
        <Toast.Body>Info: {info}</Toast.Body>
        <Toast.Body>Price: {price.toString()} ISK</Toast.Body>
      </CardContainer>
    </Toast>
  );
};

export { Card };
