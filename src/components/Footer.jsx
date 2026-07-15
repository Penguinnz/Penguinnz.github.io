import { Col, Container, Nav, Row, Stack } from "react-bootstrap"
import LogoCaritas from '../public/Caritas-Costa-Rica-logo.png';

import FacebookIcon from '../public/facebook-icon.png';

const Footer = () => {
  return (
    <footer >

        <Container fluid className="bg-danger">
            <Row className="text-white p-4">
                <Col className="mx-5">
                    <Stack>
                        <img src={LogoCaritas} 
                        alt="Logo Caritas" 
                        width={130} 
                        height={130}/>

                    </Stack>
                </Col>


                <Col>
                    <h4>Links</h4>
                    <Nav className="flex-column">
                        <Nav.Link href="/sobre-nosotros" className="text-white">Sobre Nosotros</Nav.Link>

                        <Nav.Link href="/contacto" className="text-white">Contacto</Nav.Link>

                        <Nav.Link href="/biblioteca" className="text-white">Biblioteca</Nav.Link>

                    </Nav>
                </Col>

                <Col>
                    <h4>Áreas de Trabajo</h4>
                    <Nav className="flex-column">

                        <Nav.Link href="/derechos-humanos" className="text-white">Derechos Humanos</Nav.Link>

                        <Nav.Link href="/institucional" className="text-white">Vida Institucional</Nav.Link>

                        <Nav.Link href="/ecologia" className="text-white">Ecologia</Nav.Link>

                        <Nav.Link href="/comunion" className="text-white">Comunion Caritas Internationalis</Nav.Link>


                    </Nav>
                </Col>

                <Col>
                    <h4>Estudios</h4>
                    <Nav className="flex-column">

                        <Nav.Link href="/hambre-pobreza" className="text-white">Hambre y Pobreza</Nav.Link>

                        <Nav.Link href="/infancia" className="text-white">Infancia</Nav.Link>

                    </Nav>
                </Col>


                <Col className="mx-5">
                    <h4>Contacto</h4>
                    <p>Dirección: calle 21 Avenida 3 y 5, San José, Costa Rica, 3000 </p>
                    <p>Teléfono: 2221-3053</p>
                    <p>Email: pscaritas@iglesiacr.org </p>

                    <Nav>
                    <Nav.Link href="https://www.facebook.com/caritascostarica/">
                        <img
                            src={FacebookIcon}
                            alt="Facebook"
                            width="60"
                            height="60"
                            />
                    </Nav.Link>

                    </Nav>
                    
                </Col>

            </Row>
        </Container>

    </footer>
  )
}

export default Footer