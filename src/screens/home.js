import { useState, useEffect, useContext } from 'react';
import contextPortfolio from '../context';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import ListaProyectos from './listaProyectos';

function Home() {
    const context = useContext(contextPortfolio);

    const obrasAMostrar = context.obras.slice(0, 6);

    return (
        <ListaProyectos obras={obrasAMostrar}></ListaProyectos>
    )
}

export default Home;