import { Container, Row, Col } from "react-bootstrap";
import MyRadioSection from "./MyRadioSection";
import MyQuerySection from "./MyQuerySection";
import MyExploreSection from "./MyExploreSection";
import MyNewsSection from "./MyNewsSection";

const MyMain = () => {
  return (
    <main>
      <Col className="p-4">
        <MyNewsSection></MyNewsSection>
        <MyRadioSection></MyRadioSection>
        <MyQuerySection></MyQuerySection>
        <MyExploreSection> </MyExploreSection>
      </Col>
    </main>
  );
};
export default MyMain;
