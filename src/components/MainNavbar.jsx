import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LogoCaritas from '../public/Caritas-Costa-Rica-logo.png';
import FacebookIcon from '../public/facebook-icon.png';
import { Link } from 'react-router-dom';

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
          className="d-inline-block align-top" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto fw-bold">

            <Nav.Link as={Link} to="/sobre-nosotros">
              Sobre Nosotros
            </Nav.Link>

            <NavDropdown title="Áreas de Trabajo" id="basic-nav-dropdown">

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
                Comunion Caritas Internationalis
              </NavDropdown.Item>

            </NavDropdown>

            <NavDropdown title="Estudios" id="basic-nav-dropdown">

              <NavDropdown.Item as={Link} to="/hambre-pobreza">
                Hambre y Pobreza
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/infancia">
                Infancia
              </NavDropdown.Item>

            </NavDropdown>

            <Nav.Link as={Link} to="/novedades">
              Novedades
            </Nav.Link>

            <Nav.Link as={Link} to= "/programa-somos-caritas">
              Programa Somos Caritas
            </Nav.Link>

            <Nav.Link as={Link} to="/contacto">
              Contacto
            </Nav.Link>

            <NavDropdown title="Biblioteca" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/biblioteca">
                Documentos
              </NavDropdown.Item>

              <NavDropdown.Item href="https://online.fliphtml5.com/TCUULACIT/Salud-bucodental-para-todos-_compressed/#p=1">
                Salud Bucodental
              </NavDropdown.Item>

            </NavDropdown>

            <Nav.Link href="https://www.facebook.com/caritascostarica/">
            <img
              src={FacebookIcon}
              alt="Facebook"
              width="60"
              height="60"
            />
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;