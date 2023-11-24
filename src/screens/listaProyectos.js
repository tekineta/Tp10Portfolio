import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import "./listaProyectos.css"
import { useNavigate } from "react-router";

function ListaProyectos(props) {
    const nav = useNavigate();
    
    const obras = props.obras;

    console.log("lista", obras);

    return (
        <Container className="containerProyectos">
            {obras.map(obra => (
                <Row style={{border: "1px solid black", marginTop: "2%", padding: "2%", backgroundColor: `rgba(207,207,207,0.8)`}}>
                    <div className="containerTituloYFoto">
                        <h2 className="titulo">{obra.titulo}</h2>
                        <Image className="imagen" src={obra.imagenes[0]}></Image>
                    </div>
                    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", marginTop: "5%"}}>
                        <p style={{textAlign: "center"}}>{obra.favorita ? "Esta obra es favorita" : "Esta obra no es favorita"}</p>
                        <Button variant="primary" onClick={() => nav("/detalle", {state: obra})}>Ver mas detalles</Button>
                    </div>
                </Row>
            ))}
        </Container>
    )
}

export default ListaProyectos;