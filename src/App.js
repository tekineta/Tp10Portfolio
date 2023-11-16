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

    return (
        <div className='divPrincipal'>
            <BrowserRouter>
                <contextPortfolio.Provider value={{obras, setObras}}>
                    <Routes>
                        <Route path="/" element={<Home></Home>} />
                        <Route path="/yo" element={<></>} />
                        <Route path="/miscreaciones" element={<Miscreaciones></Miscreaciones>} />
                        <Route path='/detalle' element={<></>} />
                        <Route path="/favoritos" element={<Favoritos></Favoritos>} />
                    </Routes>
                    <Footer />
                </contextPortfolio.Provider>
            </BrowserRouter>
        </div>
    )
}

export default App;
