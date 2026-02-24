import { Col, Card } from "react-bootstrap";
const MyStation = (props) => {
  return (
    <Col xs={8} className="mt-0 d-flex">
      <Card className="border-0">
        <Card.Body className="p-0 text-opacity-50 mb-3">
          <Card.Text className="mb-0">
            <small className="text-light text-opacity-50 fw-semibold">NUOVA STAZIONE RADIO</small>
          </Card.Text>
          <Card.Text className="fw-normal text-light opacity-75 fs-4 lh-sm">{props.text}</Card.Text>
        </Card.Body>
        <Card.Img variant="bottom" src={props.src} className="rounded-3" />
      </Card>
    </Col>
  );
};

export default MyStation;
