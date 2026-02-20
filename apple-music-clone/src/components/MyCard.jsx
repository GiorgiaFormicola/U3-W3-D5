import { Col, Card } from "react-bootstrap";
const MyCard = (props) => {
  return (
    <Col xs={4} className="mt-0">
      <Card className="border-0">
        <Card.Img variant="top" src={props.src} className="rounded-3" />
        <Card.Body className="p-0 text-opacity-50">
          <Card.Text>
            <span className="d-flex justify-content-between align-items-baseline text-light text-opacity-75">
              <span>{props.title}</span>
              {props.explicit === "true" && <i className="bi bi-explicit-fill"></i>}
            </span>
            {props.artist !== "" && <span className="text-light text-opacity-50">{props.artist}</span>}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default MyCard;
