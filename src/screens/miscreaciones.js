import { useContext } from "react";
import { useNavigate } from "react-router";
import contextPortfolio from "../context";
import { Button, Card, Col, Row } from "react-bootstrap";
import ListaProyectos from "./listaProyectos";

function Miscreaciones() {
    const context = useContext(contextPortfolio);

    return (
        <ListaProyectos obras={context.obras}></ListaProyectos>
    )
}

export default Miscreaciones;