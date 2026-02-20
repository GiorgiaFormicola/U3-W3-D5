import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import MyMain from "./components/MyMain";
import MyNavbar from "./components/MyNavBar";
import MyPlayer from "./components/MyPlayer";
import MyFooter from "./components/MyFooter";

// function App() {
//   return (
//     <Container fluid className="min-vh-100 bg-dark d-lg-flex px-0" data-bs-theme="dark">
//       <Row className="g-0">
//         <Col>
//           <MyNavbar />
//         </Col>
//       </Row>
//       <Row className="flex-grow-1 g-0">
//         <Col>
//           <MyMain />
//           <MyFooter />
//           {/* <MyPlayer /> */}
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default App;

function App() {
  return (
    <div className="min-vh-100 bg-dark d-flex flex-column" data-bs-theme="dark">
      <MyNavbar></MyNavbar>
      <MyMain></MyMain>
      <MyFooter></MyFooter>
    </div>
  );
}

export default App;
