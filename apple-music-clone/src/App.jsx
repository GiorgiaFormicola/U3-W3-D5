import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import MyMain from "./components/MyMain";
import MyFooter from "./components/MyFooter";
import MyPlayer from "./components/MyPlayer";
import MySidebar from "./components/MySidebar";
import MyNavDesktop from "./components/MyNavDesktop";
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <Provider store={store}>
        <Container fluid>
          <Row>
            <Col lg={2} className="d-none d-lg-block px-0 vh-100 position-fixed top-0 bg-dark">
              <MySidebar></MySidebar>
            </Col>
            <Col className="min-vh-100 d-flex flex-column offset-lg-2" data-bs-theme="dark" id="main">
              <Row>
                <MyNavDesktop></MyNavDesktop>
                <MyMain></MyMain>
                <MyFooter></MyFooter>
                <MyPlayer></MyPlayer>
              </Row>
            </Col>
          </Row>
        </Container>
      </Provider>
    </>
  );
}

export default App;
