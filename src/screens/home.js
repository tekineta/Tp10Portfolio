import { useState, useEffect, useContext } from 'react';
import contextPortfolio from '../context';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router';

function Home() {
    const nav = useNavigate();

    const context = useContext(contextPortfolio);

    const obras = context.obras

    return (
        <div>
            <Row>
                {obras.map(obra => (
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>{obra.titulo}</Card.Title>
                                <Card.Img src={obra.imagenes[0]}></Card.Img>
                            </Card.Body>
                            <Card.Footer>
                                <h2>{obra.favorita ? "Esta obra es favorita" : "Esta obra no es favorita"}</h2>
                                <Button onClick={() => nav("/miscreaciones")}>Ver mas detalles</Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default Home;