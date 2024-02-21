import {
  Container,
  Row,
} from "reactstrap";

import Header from "components/Headers/Header.js";
import PageVisits from "../components/PageVisits";
import SocialTraffic from "../components/SocialTraffic";
import Overview from "../components/Piechart";
import Performance from "../components/Barchart";
import Linechart from "../components/Linechart";

const Index = () => {
 
  return (
    <>
      <Header />
      <Container className="mt--7" fluid>
        <Row>
          <Linechart/>
          <Performance/>
        </Row>
        <Row className="mt-5">
        <SocialTraffic/>
        <Overview/>
        </Row>
     
        <Row className="mt-5">
        <PageVisits/>
        </Row>
      </Container>
    </>
  );
};

export default Index;
