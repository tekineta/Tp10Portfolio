import logo from './logo.svg';
import './App.css';
import Home from './screens/home.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext, useEffect, useState } from 'react';
import Footer from './screens/footer.js';
import axios from 'axios';
import contextPortfolio from "./context.js";
import Miscreaciones from './screens/miscreaciones.js';
import Favoritos from './screens/favoritos.js';
import SobreMi from './screens/sobremi.js';
import Detalle from './screens/detalle.js';

function App() {
    const [obras, setObras] = useState([]);

    useEffect(() => {
        const obrasEnLocalStorage = JSON.parse(localStorage.getItem("obras"));

        if(obrasEnLocalStorage !== null) {
            setObras([...obrasEnLocalStorage]);
        } else {
            axios.get("obras.json")
            .then((res) => {
                const data = res.data;
                const obras = data.obras;
                setObras([...obras]);
            })
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("obras", JSON.stringify(obras));
    }, [obras])

    const añadirAFavorito = (obra) => {
        obra.favorito = true;
        let nuevoObras = obras;
        nuevoObras = nuevoObras.map(nuevaObra => nuevaObra.Id == obra.Id ? obra : nuevaObra);
        setObras([...nuevoObras]);
    }

    const quitarDeFavorito = (obra) => {
        obra.favorito = false;
        let nuevoObras = obras;
        nuevoObras = nuevoObras.map(nuevaObra => nuevaObra.Id == obra.Id ? obra : nuevaObra);
        setObras([...nuevoObras]);
    }

    return (
        <div className='divPrincipal'>
            <BrowserRouter>
                <contextPortfolio.Provider value={{obras, setObras, añadirAFavorito, quitarDeFavorito}}>
                    <Routes>
                        <Route path="/" element={<Home></Home>} />
                        <Route path="/sobremi" element={<SobreMi></SobreMi>} />
                        <Route path="/miscreaciones" element={<Miscreaciones></Miscreaciones>} />
                        <Route path='/detalle' element={<Detalle></Detalle>} />
                        <Route path="/favoritos" element={<Favoritos></Favoritos>} />
                    </Routes>
                    <Footer />
                </contextPortfolio.Provider>
            </BrowserRouter>
        </div>
    )
}

export default App;
