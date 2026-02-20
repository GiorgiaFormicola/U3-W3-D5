import { Container, Row, Col } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

const MyFooter = () => {
  return (
    <footer className="text-light text-opacity-50 py-2">
      <Container fluid className="px-4">
        <Row className="mt-2 mb-4">
          <Col>
            <a href="" className="text-light text-opacity-75 border-end pe-3">
              Italia
            </a>
            <a href="" className="text-light text-opacity-50 ps-3">
              English {"(UK)"}
            </a>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="mb-0">
              Copyright &copy; 2024{" "}
              <a href="" className="text-light text-opacity-75 ">
                Apple Inc.
              </a>{" "}
              Tutti i diritti riservati.
            </p>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col>
            <a href="" className="text-light text-opacity-75 border-end pe-3">
              Condizioni dei servizi internet
            </a>
            <a href="" className="text-light text-opacity-75 border-end px-3">
              Apple Music e privacy
            </a>
            <a href="" className="text-light text-opacity-75 border-end px-3">
              Avviso sui cookie
            </a>
            <a href="" className="text-light text-opacity-75 border-end px-3">
              Supporto
            </a>
            <a href="" className="text-light text-opacity-75 border-end px-3">
              Feedback
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default MyFooter;
