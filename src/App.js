import logo from './logo.svg';
import './App.css';
import Home from './screens/home.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext, useEffect, useState } from 'react';
import Footer from './screens/footer.js';
import axios from 'axios';
import contextPortfolio from "./context.js";

function App() {
    const [obras, setObras] = useState();

    useEffect(() => {
        axios.get("obras.json")
        .then((res) => {
            const data = res.data;
            const obras = data.obras;
            setObras([...obras]);
        })
    }, [])

    const context = useContext(contextPortfolio);

    return (
        <div className='divPrincipal'>
            <BrowserRouter>
                <contextPortfolio.Provider value={{obras, setObras}}>
                    <Routes>
                        <Route path="/" element={<Home></Home>} />
                        <Route path="/yo" element={<></>} />
                        <Route path="/miscreaciones" element={<></>} />
                        <Route path="/favoritos" element={<></>} />
                    </Routes>
                    <Footer />
                </contextPortfolio.Provider>
            </BrowserRouter>
        </div>
    )
}

export default App;
