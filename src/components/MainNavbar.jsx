import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { Link } from "react-router-dom";

import LogoCaritas from "../public/Caritas-Costa-Rica-logo.png";
import FacebookIcon from "../public/facebook-icon.png";

const MainNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>

        <Navbar.Brand as={Link} to="/">
          <img
            src={LogoCaritas}
            alt="Logo de Cáritas"
            width="120"
            height="120"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto fw-bold">

            <Nav.Link as={Link} to="/sobre-nosotros">
              Sobre Nosotros
            </Nav.Link>

            <NavDropdown title="Áreas de Trabajo" id="areas-dropdown">

              <NavDropdown.Item as={Link} to="/derechos-humanos">
                Derechos Humanos
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/institucional">
                Vida Institucional
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/ecologia">
                Ecología
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/comunion">
                Comunión Caritas Internationalis
              </NavDropdown.Item>

            </NavDropdown>

            <NavDropdown title="Estudios" id="estudios-dropdown">

              <NavDropdown.Item as={Link} to="/hambre-pobreza">
                Hambre y Pobreza
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/infancia">
                Infancia
              </NavDropdown.Item>

            </NavDropdown>

            <Nav.Link as={Link} to="/contacto">
              Contacto
            </Nav.Link>

            <Nav.Link as={Link} to="/biblioteca">
              Biblioteca
            </Nav.Link>

            <a
              href="https://www.facebook.com/caritascostarica/"
              target="_blank"
              rel="noopener noreferrer"
              className="ms-3"
            >
              <img
                src={FacebookIcon}
                alt="Facebook"
                width="40"
                height="40"
              />
            </a>

          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
};

export default MainNavbar;