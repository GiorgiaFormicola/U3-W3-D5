import { Row, Col } from "react-bootstrap";

import MyExploreLink from "./MyExploreLink";

const MyExploreSection = () => {
  return (
    <Row className="text-light text-opacity-75 py-2">
      <Col xs={12}>
        <h5 className="mb-0">Altro da esplorare</h5>
      </Col>
      <Col xs={12}>
        <Row xs={1} lg={3} className="mt-0 g-3">
          <Col className="d-flex flex-column gap-3">
            <MyExploreLink text="Esplora per genere"></MyExploreLink>
            <MyExploreLink text="Decenni"></MyExploreLink>
            <MyExploreLink text="Attività e stati d'animo"></MyExploreLink>
          </Col>
          <Col className="d-flex flex-column gap-3">
            <MyExploreLink text="Worldwide"></MyExploreLink>
            <MyExploreLink text="Classifiche"></MyExploreLink>
            <MyExploreLink text="Audio spaziale"></MyExploreLink>
          </Col>
          <Col className="d-flex flex-column gap-3">
            <MyExploreLink text="Video musicali"></MyExploreLink>
            <MyExploreLink text="Nuovi artisti"></MyExploreLink>
            <MyExploreLink text="Hit del passato"></MyExploreLink>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default MyExploreSection;
