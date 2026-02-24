import { Col, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { GET_SONG } from "../redux/actions";
const MyCard = (props) => {
  const dispatch = useDispatch();
  return (
    <Col xs={4} className="mt-0">
      <Card className="border-0">
        <Card.Img
          style={{ cursor: "pointer" }}
          variant="top"
          src={props.src}
          className="rounded-3"
          onClick={() =>
            dispatch({
              type: GET_SONG,
              payload: {
                title: props.title,
                artist: props.artist,
                cover: props.src,
              },
            })
          }
        />
        <Card.Body className="p-0 text-opacity-50">
          <Card.Text>
            <span className="d-flex justify-content-between align-items-baseline text-light text-opacity-75">
              <span>{props.title}</span>
              {props.explicit === true && <i className="bi bi-explicit-fill"></i>}
            </span>
            {props.artist !== "" && <span className="text-light text-opacity-50">{props.artist}</span>}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default MyCard;
