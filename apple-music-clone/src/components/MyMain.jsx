import { Container, Row, Col } from "react-bootstrap";
import MyRadioSection from "./MyRadioSection";
import MyQuerySection from "./MyQuerySection";
import MyExploreSection from "./MyExploreSection";
import MyNewsSection from "./MyNewsSection";

const MyMain = () => {
  return (
    <main>
      <Container fluid className="px-4 py-1">
        <MyNewsSection></MyNewsSection>
        <MyRadioSection></MyRadioSection>
        <MyQuerySection></MyQuerySection>
        <MyExploreSection> </MyExploreSection>
      </Container>
    </main>
  );
};
export default MyMain;
