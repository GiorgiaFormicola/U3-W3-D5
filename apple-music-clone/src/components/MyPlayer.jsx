import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
const MyPlayer = () => {
  const playingSong = useSelector((currentState) => currentState.playingSong.songObject);
  return (
    <Col className="px-4 py-1 fixed-bottom d-lg-none" id="player">
      <Row>
        <Col className="rounded-4 p-2">
          <div className="d-flex align-items-center justify-content-between">
            {playingSong && (
              <div className="d-flex gap-2 align-items-center">
                <img src={playingSong.cover} alt="" className="img-fluid rounded-3" />
                <div>
                  <p className="text-light text-opacity-75 mb-0">{playingSong.title}</p>
                  <p className="text-light text-opacity-50 mb-0">{playingSong.artist}</p>
                </div>
              </div>
            )}

            <div className="d-flex align-items-center gap-3 px-2 ms-auto">
              <i className="bi bi-play-fill text-light text-opacity-25"></i>
              <i className="bi bi-fast-forward-fill text-light text-opacity-25"></i>
            </div>
          </div>
        </Col>
      </Row>
    </Col>
  );
};
export default MyPlayer;
