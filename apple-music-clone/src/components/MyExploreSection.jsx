import { Row, Col } from "react-bootstrap";

import MyExploreLink from "./MyExploreLink";

const MyExploreSection = () => {
  return (
    <Row className="text-light text-opacity-75 py-4">
      <Col xs={12} className="mb-2">
        <h5>Altro da esplorare</h5>
      </Col>
      <Col xs={12}>
        <Row className="mt-0 gap-3">
          <MyExploreLink text="Esplora per genere"></MyExploreLink>
          <MyExploreLink text="Decenni"></MyExploreLink>
          <MyExploreLink text="Attività e stati d'animo"></MyExploreLink>
          <MyExploreLink text="Worldwide"></MyExploreLink>
          <MyExploreLink text="Classifiche"></MyExploreLink>
          <MyExploreLink text="Audio spaziale"></MyExploreLink>
          <MyExploreLink text="Video musicali"></MyExploreLink>
          <MyExploreLink text="Nuovi artisti"></MyExploreLink>
          <MyExploreLink text="Hit del passato"></MyExploreLink>
        </Row>
      </Col>
    </Row>
  );
};

export default MyExploreSection;
