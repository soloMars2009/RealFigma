import React from "react";
import Evre from "./components/Evre";
import MyNavbar from "./components/MyNavbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style.css"
import Home from "./components/Home";
import Portfolion from "./components/Portfolio";
import Footer from "./components/Footer";
import Catalog from "./components/Cotalog";


export default function App() {
    return (
        <>


            <BrowserRouter>
            <MyNavbar />
                <Routes>
                    <Route path="/home" element={<Home />}></Route>
                    <Route path="/evre" element={<Evre />}></Route>
                    <Route path="/port" element={<Portfolion />}></Route>
                    <Route path="/cot" element={<Catalog />}></Route>
                </Routes>
            </BrowserRouter>

        </>
    )
}