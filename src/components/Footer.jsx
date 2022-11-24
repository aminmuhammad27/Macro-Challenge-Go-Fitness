import { Col, Row, Container } from "react-bootstrap";
import Logo from "../assets/images/Logo-GoFitness.png";
const Footer = () => {
  return (
    <footer className="footer p-4">
      <Container>
        <Row>
          <Col className="logo-footer">
            <h1>Go Fitness</h1>
          </Col>
          <Col>
            <h1>Halaman</h1>
            <p>Tentang Kami</p>
            <p>Panduan</p>
            <p>Artikel</p>
          </Col>
          <Col>
            <h1>Sosial</h1>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Whatsapp</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
