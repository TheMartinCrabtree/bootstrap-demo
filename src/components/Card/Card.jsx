import React from "react";
import { Toast } from "react-bootstrap";

const Card = (props) => {
  const { id, name, image, info, price } = props;

  return (
    <Toast id={id}>
      <Toast.Header>
        <strong className="temp">Ship: {name}</strong>
      </Toast.Header>
      <Toast.Body>Info: {info}</Toast.Body>
      <Toast.Body>Price: {price.toString()} ISK</Toast.Body>
    </Toast>
  );
};

export { Card };
