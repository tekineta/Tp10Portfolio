import { useContext } from "react";
import { useNavigate } from "react-router";
import contextPortfolio from "../context";
import { Button, Card, Col, Row } from "react-bootstrap";
import ListaProyectos from "./listaProyectos";
import Form from 'react-bootstrap/Form';


function SobreMi() {
    const context = useContext(contextPortfolio);
    function sobremi() {
        return (
          <div>
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
      
          </div>
            );
        }
    }
        export default SobreMi;