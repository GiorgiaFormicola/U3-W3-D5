import { Container, Row, Col, Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const MyNavDesktop = () => {
  const playingSong = useSelector((currentState) => currentState.playingSong.songObject);
  return (
    <Col className="px-4 py-2 d-none d-lg-block" id="nav-desk">
      <Row className="align-items-center justify-content-between">
        <Col className="text-light text-opacity-25">
          <div className="d-flex justify-content-center align-items-center gap-2">
            <i className="bi bi-shuffle mt-1"></i>

            <i className="bi bi-fast-forward-fill fs-5" style={{ transform: "scaleX(-1)" }}></i>

            <i className="bi bi-play-fill fs-3 "></i>

            <i className="bi bi-fast-forward-fill fs-5"></i>

            <i className="bi bi-repeat mt-1"></i>
          </div>
        </Col>
        <Col lg={5}>
          {!playingSong && (
            <div className="bg-light bg-opacity-25 text-center rounded-1 py-2">
              <img src="/assets/logos/apple.svg" alt="" id="apple" />
            </div>
          )}

          {playingSong && (
            <>
              <div className="d-flex align-items-center">
                <img src={playingSong.cover} alt="" className="img-fluid rounded-start-1" style={{ height: "2.6em" }} />
                <div
                  className="bg-light bg-opacity-25 text-center rounded-end-1 py-2 flex-grow-1 lh-sm d-flex flex-column justify-content-center"
                  style={{ height: "2.6em" }}
                >
                  <p className="text-light text-opacity-75 mb-0">{playingSong.title}</p>
                  <p className="text-light text-opacity-50 mb-0">{playingSong.artist}</p>
                </div>
              </div>
            </>
          )}
        </Col>
        <Col>
          <div className="d-flex align-items-center">
            <div className="flex-grow-1 text-center text-light text-opacity-25">
              <i className="bi bi-volume-up-fill px-1 "></i>
              <input type="range" min="0" max="100" value="50" className="volume px-1"></input>
            </div>

            <Button size="sm" className="login mb-0 bg-danger text-light border-0 px-3">
              <div className="d-flex gap-1">
                <i className="bi bi-person-fill"></i>
                <span>Accedi</span>
              </div>
            </Button>
          </div>
        </Col>
      </Row>
    </Col>
  );
};

export default MyNavDesktop;
