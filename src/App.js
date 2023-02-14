import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { Cart } from "./components/Cart";

import ships from "./data.json";

function App() {
  return (
    <Container>
      <header>
        <h1>Eve Online Shop Demo</h1>
      </header>
      <Row>
        <p>Hello</p>
      </Row>
    </Container>
  );
}

export default App;
