import { useContext } from "react";
import { useNavigate } from "react-router";
import contextPortfolio from "../context";
import { Button, Card, Col, Row } from "react-bootstrap";
import ListaProyectos from "./listaProyectos";
import Form from 'react-bootstrap/Form';


function SobreMi() {
    const context = useContext(contextPortfolio);
    return (
        <div style={{padding: "2%"}}>
            <div style={{padding: "2%", backgroundColor: `rgba(207,207,207,0.5)`}}>
                <i>
                    Hola, soy Andrés Bruno Tekiel.
                </i>
                <br/>
                <i>
                    Programo hace un año y medio, domino C#, Js, React, React Native, SQL Server y excel.
                </i>
                <br/>
                <i>
                    Tengo un nivel de ingles avanzado con diferentes diplomas de cambridge.
                </i>
                <br/>
                <i>
                    En mi jornada secundaria tambien hice media especializacion en Medios de la comunicacion en donde aprendi a conducir un programa de radio, sacar fotos semiprofesionales, y grabar videoclips.
                    En la universidad voy a estudiar Economia Empresarial y hare un posgrado en finanzas.
                </i>
            </div>
        </div>
    );
}
export default SobreMi;