import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import "./listaProyectos.css"
import { useNavigate } from "react-router";

function ListaProyectos(props) {
    const nav = useNavigate();

    const obras = props.obras;

    console.log("lista", obras);

    return (
        <Container className="containerProyectos">
            <Row style={{display: "flex", flexWrap: "wrap"}}>
                {obras.map(obra => (
                    <Card style={{ width: '18rem' }}>
                        <Card.Img style={{paddingTop: "2%"}} variant="top" src={obra.imagenes[0]} />
                        <Card.Body style={{display: "flex", justifyContent: "center", flexDirection: "column", textAlign: "center"}}>
                            <Card.Title>{obra.titulo}</Card.Title>
                            <Button variant="primary" onClick={() => nav("/detalle", {state: obra})}>Ver mas detalles</Button>
                        </Card.Body>
                    </Card>
                ))}
            </Row>
        </Container>
    )
}

export default ListaProyectos;