import { Row, Col } from "react-bootstrap";
import MyCard from "./MyCard";
const MyQuerySection = () => {
  return (
    <Row className="text-light text-opacity-75 py-4">
      <Col xs={12} className="mb-2">
        <h5>
          Nuove uscite <span className="text-secondary">{">"}</span>
        </h5>
      </Col>
      <Col xs={12}>
        <Row className="flex-nowrap g-3 mt-0 mb-3">
          <MyCard src="/assets/images/2b.png" title="Song placeholder" explicit="true" artist="Artist Placeholder"></MyCard>
          <MyCard src="/assets/images/2b.png" title="Song placeholder" explicit="true" artist="Artist Placeholder"></MyCard>
          <MyCard src="/assets/images/2b.png" title="Song placeholder" explicit="true" artist="Artist Placeholder"></MyCard>
          <MyCard src="/assets/images/2b.png" title="Song placeholder" explicit="true" artist="Artist Placeholder"></MyCard>
          <MyCard src="/assets/images/2b.png" title="Song placeholder" explicit="true" artist="Artist Placeholder"></MyCard>
          <MyCard src="/assets/images/2b.png" title="Song placeholder" explicit="true" artist="Artist Placeholder"></MyCard>
        </Row>
        <Row className="flex-nowrap g-3 mt-0 mb-3">
          <MyCard src="/assets/images/2b.png" title="Song placeholder" explicit="true" artist="Artist Placeholder"></MyCard>
          <MyCard src="/assets/images/2b.png" title="Song placeholder" explicit="true" artist="Artist Placeholder"></MyCard>
          <MyCard src="/assets/images/2b.png" title="Song placeholder" explicit="true" artist="Artist Placeholder"></MyCard>
          <MyCard src="/assets/images/2b.png" title="Song placeholder" explicit="true" artist="Artist Placeholder"></MyCard>
          <MyCard src="/assets/images/2b.png" title="Song placeholder" explicit="true" artist="Artist Placeholder"></MyCard>
          <MyCard src="/assets/images/2b.png" title="Song placeholder" explicit="true" artist="Artist Placeholder"></MyCard>
        </Row>
      </Col>
    </Row>
  );
};
export default MyQuerySection;
