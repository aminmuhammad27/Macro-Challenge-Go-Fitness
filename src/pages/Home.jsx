import Layout from "../components/Layout";
import { Row, Col, Card, Container } from "react-bootstrap";
import fitdes from "../assets/images/desfit.png";
import fitdes2 from "../assets/images/desfit2.png";
import bghome from "../assets/images/bghome.png";
import check from "../assets/images/icon-check.png";
import bghome2 from "../assets/images/bghome2.png";
const Home = () => {
  return (
    <Layout>
      <div className="home mb-5"></div>
      <div>
        <Container className="mt-5 ">
          <h1>Fitness</h1>
          <Row className="mb-5">
            <Col>
              <p>
                Merupakan kemampuan tubuh dalam menyesuaikan beban fisik yang
                diterima karena melakukan kegiatan sehari-hari. Kebugaran
                merupakan suatu kebutuhan yang perlu dipenuhi seseorang agar
                dapat menjalankan aktivitas sehari-hari dengan baik tanpa
                mengalami gangguan kesehatan dan kelelahan yang berlebih.
              </p>
            </Col>
            <Col>
              <img src={fitdes} alt="" />
            </Col>
          </Row>
        </Container>
        <div className="text-center content-judul my-5">
          <h1>
            GET STARTED WITH A <br />
            PERSONALIZED PLAN JUST FOR YOU
          </h1>
          <img src={bghome} width="100%" alt="" />
        </div>

        <Row className="m-5">
          <Col>
            <Card style={{ width: "18rem" }} className="mx-auto">
              <Container>
                <Card.Body className="mx-auto my-auto">
                  <img src={check} alt="" />
                  <h1>Step-by-step Video</h1>
                </Card.Body>
              </Container>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }} className="mx-auto">
              <Container>
                <Card.Body>
                  <img src={check} alt="" />
                  <h1> Informasi Terbaru</h1>
                </Card.Body>
              </Container>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Container>
                <Card.Body className="mx-auto my-auto">
                  <img src={check} alt="" />
                  <h1>Fitnes Update</h1>
                </Card.Body>
              </Container>
            </Card>
          </Col>
        </Row>

        <div>
          <img src={bghome2} width="100%" alt="" />
        </div>
      </div>
      <Container className="m-5">
        <Row>
          <Col xs="5">
            <img src={fitdes2} alt="" className="pic-home" />
          </Col>
          <Col xs="7">
            <div className="kartu">
              <h1>Apa Itu GoFitness?</h1>
              <p>
                GOFitness merupakan website untuk para pemula yang ingin memulai
                berlatih ditempat GYM GOFitness menghadirkan video tutorial
                untuk user, dan juga ada fitur fitur pemahaman materi dasar
                untuk melatih fitnes yang maksimal
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Home;
