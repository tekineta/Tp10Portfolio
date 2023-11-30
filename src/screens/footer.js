import { Col, Row } from "react-bootstrap";
import "./footer.css"
import { useNavigate } from "react-router";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';


function Footer() {
    const nav = useNavigate();
    
    return (
        <div className="containerFooter2">
            
           {/* <nav>
                <div className="containerFooter">

                    <Row>
                        <Col onClick={() => nav("/")}>
                            Home
                        </Col>
                        <Col onClick={() => nav("/sobremi")}>
                            Sobre mi
                        </Col>
                        <Col onClick={() => nav("/miscreaciones")}>
                            Mis creaciones
                        </Col>
                        <Col onClick={() => nav("/favoritos")}>
                            Favoritos
                        </Col>
                    </Row>
                </div>
                    
    </nav>*/}

            <footer>
             
  <div className='fondo'>
                                <Row className="justify-content-center">
                                    <Col md={9}>
                                        <h1 className="titulo-reg">¡Contactame!</h1>
                                        <Form className="contact-form">

                                            <Form.Group controlId="nombre">
                                                <div class="grupoTexto">
                                                    <Form.Label>Nombre</Form.Label>
                                                    <Form.Control type="text" placeholder="Escribe tu nombre" />
                                                </div>
                                            </Form.Group>
                                            <Form.Group controlId="email">
                                                <div class="grupoTexto2">
                                                    <Form.Label>Email</Form.Label>
                                                    <Form.Control type="email" placeholder="✉  Escribe tu email" />
                                                </div>
                                            </Form.Group>
                                            <Form.Group controlId="telefono">
                                                <div class="grupoTexto3">
                                                    <Form.Label>Teléfono</Form.Label>
                                                    <Form.Control type="tel" placeholder="☏    Escribe tu teléfono" />
                                                </div>
                                            </Form.Group>
                                            <Form.Group controlId="mensaje">
                                                <div class="grupoTexto4">
                                                    <Form.Label>Mensaje</Form.Label>
                                                    <Form.Control type="text" placeholder="Escribe tu mensaje" />
                                                </div>

                                            </Form.Group>
                                            <Button variant="primary" size="lg" type="submit" className="enviar-btn">
                                                Enviar
                                            </Button>
                                            <Button variant="secondary" size="lg" className="volver-btn">
                                                Volver
                                            </Button>
                                        </Form>
                                    </Col>
                                </Row>
                                <div className="contact-info">
                                    <p>Contacto: andres.tekiel@gmail.com</p>
                                    <p>Teléfono: +541134139613</p>
                                </div>
                        </div>
             
            </footer>
          
        </div>
    )
}

export default Footer;