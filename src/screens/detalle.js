import { useEffect, useState } from "react";
import { useParams } from "react-router";

function Detalle() {
    const state = useParams();

    console.log("TANTARAN", state)

    return (
        <h2>{state.obra.id}</h2>
    )
}

export default Detalle;