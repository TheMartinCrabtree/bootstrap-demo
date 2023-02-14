import React from "react";
import { Toast } from "react-bootstrap";

// <Toast onClose={() => toggle(false)}>
const Cart = (props) => {
  return (
    <Toast>
      <Toast.Header>
        <strong className="temp">Strong toast heading text</strong>
      </Toast.Header>
      <Toast.Body>Toast body text</Toast.Body>
    </Toast>
  );
};

export { Cart };
