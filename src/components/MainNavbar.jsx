import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LogoCaritas from '../public/Caritas-Costa-Rica-logo.png';
import FacebookIcon from '../public/facebook-icon.png';

const MainNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        
        <Navbar.Brand href="/">
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

            <Nav.Link href= "/sobre-nosotros">
              Sobre Nosotros
            </Nav.Link>

            <NavDropdown title="Áreas de Trabajo" id="basic-nav-dropdown">

              <NavDropdown.Item href="/derechos-humanos">
                Derechos Humanos
              </NavDropdown.Item>

              <NavDropdown.Item href="/institucional">
                Vida Institucional
              </NavDropdown.Item>

              <NavDropdown.Item href="/ecologia">
                Ecología
              </NavDropdown.Item>

              <NavDropdown.Item href="/comunion">
                Comunion Caritas Internationalis
              </NavDropdown.Item>

            </NavDropdown>

            <NavDropdown title="Estudios" id="basic-nav-dropdown">

              <NavDropdown.Item href="/hambre-pobreza">
                Hambre y Pobreza
              </NavDropdown.Item>

              <NavDropdown.Item href="/infancia">
                Infancia
              </NavDropdown.Item>

            </NavDropdown>

            <Nav.Link href="/contacto">
              Contacto
            </Nav.Link>

            <Nav.Link href="/biblioteca">
              Biblioteca
            </Nav.Link>

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