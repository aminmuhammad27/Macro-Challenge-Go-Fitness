import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { HOME, ABOUT, PANDUAN, ARTIKEL } from "../router";
const Navbars = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mx-auto">
    <Container>
      <NavLink to="/" className="navbar-brand nav-logo">
        <h1>Go Fitness</h1>
      </NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <NavLink to={HOME} className="nav-link">
            Beranda
          </NavLink>
          <NavLink to={ABOUT} className="nav-link">
            Tentang Kami
          </NavLink>
          <NavDropdown title="Panduan">
            <NavDropdown.Item href="#action/3.1">Foto</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Video Tutorial
            </NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>
          <NavLink to={ARTIKEL} className="nav-link">
            Artikel
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default Navbars;
