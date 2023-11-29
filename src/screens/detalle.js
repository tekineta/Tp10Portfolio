import { useContext, useEffect, useState } from "react";
import { Button, Carousel, Container, Image } from "react-bootstrap";
import { useLocation, useParams } from "react-router";
import "./detalle.css"
import contextPortfolio from "../context";

function Detalle() {
    const state = useLocation();
    const obra = state.state;

    const context = useContext(contextPortfolio);

    return (
        <Container className="containerInfo">
            <h2>{obra.titulo}</h2>
            <div className="containerInfoHorizontal">
                <Carousel className="carousel">
                    {obra.imagenes.map((imagen) => (
                        <Carousel.Item style={{width: "100%", height: "100%"}}>
                            <Image style={{width: "100%", height: "100%"}} src={imagen}></Image>
                        </Carousel.Item>
                    ))}
                </Carousel>
                <div className="containerInfo" style={{padding: "1%", backgroundColor: `rgba(207,207,207,0.8)`}}>
                    <div>{obra.descripcion}</div>
                    <div>Creada el {obra.fecha}</div>
                    <a href={obra.url} target="_blank" rel="noopener noreferrer">Sigue este link para ir al repo</a>
                    <p>-{obra.favorito == true ? "Esta obra es favorita" : "Esta obra no es favorita"}-</p>
                </div>
            </div>
            <div style={{marginTop: "2%"}}>
                {obra.favorito == true ? (
                        <Button onClick={() => context.quitarDeFavorito(obra)}>Quitar de favs</Button> 
                    ) : (
                        <Button onClick={() => context.añadirAFavorito(obra)}>Anadir a favs</Button>
                    )}
            </div>
        </Container>
    )
}

export default Detalle;