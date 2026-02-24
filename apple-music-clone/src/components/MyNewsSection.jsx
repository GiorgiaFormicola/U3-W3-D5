import { Row, Col } from "react-bootstrap";
import MyStation from "./MyStation";

const NewsSection = () => {
  return (
    <Row className="text-light text-opacity-75 pb-3">
      <Col xs={12} className="mb-2">
        <h1 className="display-4 fw-semibold text-light text-opacity-100 border-bottom border-opacity-10 py-2">Novità</h1>
      </Col>
      <Col xs={12} className="overflow-auto">
        <Row lg={2} className="flex-nowrap g-2 mt-0 mb-3 g-lg-3">
          <MyStation src="/assets/images/1a.png" text="Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill"></MyStation>
          <MyStation src="/assets/images/1b.png" text="Ecco la nuova casa della musica latina"></MyStation>
        </Row>
      </Col>
    </Row>
  );
};

export default NewsSection;
