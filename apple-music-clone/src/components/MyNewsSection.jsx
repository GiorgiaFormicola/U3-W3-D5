import { Row, Col } from "react-bootstrap";
import MyStation from "./MyStation";

const NewsSection = () => {
  return (
    <Row className="text-light text-opacity-75 py-4">
      <Col xs={12} className="mb-2">
        <h1 className="display-3 fw-semibold text-light text-opacity-100">Novità</h1>
      </Col>
      <Col xs={12}>
        <Row className="flex-nowrap g-2 mt-0 mb-3">
          <MyStation src="/assets/images/1a.png" text="Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill"></MyStation>
          <MyStation src="/assets/images/1b.png" text="Ecco la nuova casa della musica latina"></MyStation>
          <MyStation src="/assets/images/1c.png" text="Lorem impsum Lorem impsum Lorem impsum"></MyStation>
        </Row>
      </Col>
    </Row>
  );
};

export default NewsSection;
