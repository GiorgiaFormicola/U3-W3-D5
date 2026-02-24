import { Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";

import InputGroup from "react-bootstrap/InputGroup";

const MySidebar = () => {
  return (
    <nav id="sidebar">
      <Col className="px-3">
        <Row className="flex-column g-3">
          <Col lg={12} className="py-2">
            <img src="/assets/logos/music.svg" alt="" id="logo" />
          </Col>
          <Col>
            <Form>
              <InputGroup size="sm" data-bs-theme="dark">
                <InputGroup.Text className="border-end-0 bg-dark">
                  <i className="bi bi-search"></i>
                </InputGroup.Text>
                <Form.Control type="text" placeholder="Cerca" className="border-start-0" />
              </InputGroup>
            </Form>
          </Col>
          <Col lg={12} className="d-flex flex-column gap-1" id="side-nav">
            <div className="d-flex gap-2 rounded-2 px-2">
              <i className="bi bi-house-door"></i>{" "}
              <a href="" className="text-light text-opacity-75">
                Home
              </a>
            </div>
            <div className="d-flex gap-2 rounded-2 px-2">
              <i className="bi bi-grid"></i>{" "}
              <a href="" className="text-light text-opacity-75">
                Novità
              </a>
            </div>
            <div className="d-flex gap-2 rounded-2 px-2">
              <i className="bi bi-broadcast"></i>{" "}
              <a href="" className="text-light text-opacity-75">
                Radio
              </a>
            </div>
          </Col>
        </Row>
      </Col>
    </nav>
  );
};
export default MySidebar;
