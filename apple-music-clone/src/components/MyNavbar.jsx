import { Container, Row, Col } from "react-bootstrap";

const MyNavbar = () => {
  return (
    <nav className="d-lg-none" id="navbar">
      <Col className="px-4 py-2">
        <Row>
          <Col className="d-flex align-items-center justify-content-between">
            <div>
              <div className="minus">
                <i className="fas fa-minus"></i>
                <i className="fas fa-minus"></i>
              </div>
              <div>
                <i className="fas fa-minus"></i>
                <i className="fas fa-minus"></i>
              </div>
            </div>

            <img src="/assets/logos/music.svg" alt="" id="logo" />
            <a className="login mb-0">Accedi</a>
          </Col>
        </Row>
      </Col>
    </nav>
  );
};

export default MyNavbar;
