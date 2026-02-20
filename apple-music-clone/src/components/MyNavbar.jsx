import { Container, Row, Col } from "react-bootstrap";

const MyNavbar = () => {
  return (
    <nav>
      <Container fluid className="px-4 py-1">
        <Row>
          <Col className="d-flex align-items-center justify-content-between">
            <i className="bi bi-list fs-1"></i>
            <img src="/assets/logos/music.svg" alt="" id="logo" />
            <a className="login mb-0">Accedi</a>
          </Col>
        </Row>
      </Container>
    </nav>
  );
};

export default MyNavbar;
