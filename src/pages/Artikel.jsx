import Layout from "../components/Layout";
import { Container, Row, Col, Button, Stack } from "react-bootstrap";
import Plank from "../assets/images/plank-artikel.png";
import Tarik from "../assets/images/artikel2.png";
import Gym from "../assets/images/gym-artikel.png";
import CardImg from "../assets/images/card-artikel1.png";
import CardImg2 from "../assets/images/card-artikel2.png";
import CardImg3 from "../assets/images/card-artikel3.png";
import CardImg4 from "../assets/images/card-artikel4.png";

const Artikel = () => {
  return (
    <Layout>
      <Container>
        <div className="artikel">
          <h1 className="mt-5">Artikel Populer</h1>
          <Row className="mb-5">
            <Col xs="4">
              <img src={Plank} alt="" className="pic-artikel" />
            </Col>
            <Col xs="8">
              <h1>5 manfaat plank dan cara melakukannya</h1>
              <ul>
                <li>Memperbaiki postur tubuh</li>
                <li>Memantapkan keseimbangan tubuh </li>
                <li>mengencangkan perut</li>
                <li> Meningkatkan kebugaran jasmani dan metabolisme tubuh </li>
              </ul>
              <Button variant="outline-dark">Baca Selengkapnya</Button>
            </Col>
          </Row>
          <Row className="mb-5">
            <Col xs="4">
              <img src={Tarik} alt="" className="pic-artikel" />
            </Col>
            <Col xs="8">
              <h1>Mual Setelah Olahraga? Ini Cara Mengatasinya</h1>
              <p>
                Ketika berolahraga, kadang kita tidak sadar jika melakukan
                gerakan yang terlalu berlebihan sehingga mengalami mual setelah
                olahraga. Padahal tujuan kita berolahraga tentunya untuk
                mendapatkan manfaat positif. Beberapa manfaat itu seperti tubuh
                yang lebih bugar, otot yang lebih kekar, serta perasaan yang
                lebih bahagia
              </p>
              <Button variant="outline-dark">Baca Selengkapnya</Button>
            </Col>
          </Row>
          <Row >
            <Col xs="4">
              <img src={Gym} alt="" className="pic-artikel" />
            </Col>
            <Col xs="8">
              <h1>Macam-macam alat fitness untuk gym</h1>
              <p>
                Memiliki kesadaran hidup sehat bisa menjadi salah satu alasan
                Anda untuk membuka pusat kebugaran. Berbagai informasi tentang
                peralatan gym pun sudah bisa Anda cari termasuk macam-macam alat
                fitness terbaru yang banyak digemari oleh para peserta.
              </p>

              <Button variant="outline-dark">Baca Selengkapnya</Button>
            </Col>
          </Row>
        </div>
        <div className="mb-5">
          <Row>
            <h1 className="text-center mb-5">Artikel Terakhir</h1>
            <Col>
              <img src={CardImg} alt="" className="pic-artikel2" />
              <h1 className="desk-artikel">
                Mandaat pull up untuk tubuh <br />
                dan cara melakukannya
              </h1>
              <Button variant="outline-dark">Baca Selengkapnya</Button>
            </Col>
            <Col>
              <img src={CardImg2} alt="" className="pic-artikel2" />
              <h1 className="desk-artikel">
                Dampak buruk memendam <br />
                emosi bagi kesehatan mental.
              </h1>
              <Button variant="outline-dark">Baca Selengkapnya</Button>
            </Col>
            <Col>
              <img src={CardImg3} alt="" className="pic-artikel2" />
              <h1 className="desk-artikel">
                7 Manfaat kopi untuk olahraga <br /> dan cara membuatnya
              </h1>
              <Button variant="outline-dark">Baca Selengkapnya</Button>
            </Col>
            <Col>
              <img src={CardImg4} alt="" className="pic-artikel2" />
              <h1 className="desk-artikel">
                Latihan dan Cara Membentuk <br />
                Otot Betis dan juga tekniknya
              </h1>
              <Button variant="outline-dark">Baca Selengkapnya</Button>
            </Col>
          </Row>
        </div>
      </Container>
    </Layout>
  );
};

export default Artikel;
