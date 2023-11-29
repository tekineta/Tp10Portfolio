import { useContext } from "react";
import contextPortfolio from "../context";
import ListaProyectos from "./listaProyectos";

function Favoritos() {
    const context = useContext(contextPortfolio);

    const obrasAMostrar = context.obras.filter(obra => obra.favorito === true);

    return (
        <ListaProyectos obras={obrasAMostrar}></ListaProyectos>
    )
}

export default Favoritos;