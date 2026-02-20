import { Row, Col } from "react-bootstrap";
import MyCard from "./MyCard";
const MyRadioSection = () => {
  return (
    <Row className="text-light text-opacity-75 py-4">
      <Col xs={12} className="mb-2">
        <h5>
          Nuovi episodi radio <span className="text-secondary">{">"}</span>
        </h5>
      </Col>
      <Col xs={12}>
        <Row className="flex-nowrap g-3 mt-0">
          <MyCard src="/assets/images/2b.png" title="Prólogo con Abuelo" explicit="true" artist=""></MyCard>
          <MyCard src="/assets/images/2a.png" title="The Wanderer" explicit="false" artist=""></MyCard>
          <MyCard src="/assets/images/2c.png" title="Michael Bublé & Carly Pearce" explicit="false" artist=""></MyCard>
          <MyCard src="/assets/images/2d.png" title="Stephan Moccio: The Zane Lowe Interview" explicit="false" artist=""></MyCard>
          <MyCard src="/assets/images/2e.png" title="Chart Spotlight: Julia Michaels" explicit="false" artist=""></MyCard>
          <MyCard src="/assets/images/2f.png" title="Karri & Travis Mills" explicit="false" artist=""></MyCard>
        </Row>
      </Col>
    </Row>
  );
};
export default MyRadioSection;
