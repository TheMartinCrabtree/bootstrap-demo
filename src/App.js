import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { Cart } from "./components/Cart";
import { Card } from "./components/Card";

import ships from "./data.json";

function App() {
  const _renderCards = (dataArr) => {
    return dataArr.map((data) => {
      return <Card {...data} />;
    });
  };

  return (
    <Container>
      <header>
        <h1>Eve Online Shop Demo</h1>
      </header>
      <Row>{ships && _renderCards(ships)}</Row>
    </Container>
  );
}

export default App;
