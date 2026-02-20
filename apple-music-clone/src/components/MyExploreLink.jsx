import { Col } from "react-bootstrap";
const MyExploreLink = (props) => {
  return (
    <Col xs={12}>
      <div className="explore-link rounded-3 p-4">
        <a href="" className="text-decoration-none">
          <p className="d-flex justify-content-between mb-0">
            <span>{props.text}</span>
            <span>{">"}</span>
          </p>
        </a>
      </div>
    </Col>
  );
};
export default MyExploreLink;
