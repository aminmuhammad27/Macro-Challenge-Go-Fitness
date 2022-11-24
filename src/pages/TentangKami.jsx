import { Row, Col } from "react-bootstrap";
import picdes from "../assets/images/bg-tentang.png";

import Layout from "../components/Layout";
const TentangKami = () => {
  return (
    <Layout>
      <Row className="m-5">
        <Col>
          <img src={picdes} alt="" />
        </Col>
        <Col className="desk-tentang">
          <h1> Tentang Kami</h1>
          <p>
            Kami di Go Fitnes percaya bahwa kami dapat memberikan edukasi bagi
            para pemula yang ingin bergabung di dunia Fitnes, dan juga sangat
            memprioritaskan kebutuhan pelanggan agar menghasilkan sebuah timbal
            balik yang positif
          </p>
        </Col>
      </Row>
    </Layout>
  ) 
};

export default TentangKami;
