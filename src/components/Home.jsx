import React from "react";
import Blog from "./Blog";
import Carusel from "./Carusel";
import Footer from "./Footer";
import Mesto from "./Mesto";
import Oboi from "./Oboi";
import Popular from "./Popular";
import Uslugi from "./Uslugi";
import Zayavka from "./Zayavka";









export default function Home(){
    return(
        <>
                <div className="color">
                    <Carusel />
                    <Oboi />
                    <Uslugi />
                    <Popular />
                    <Mesto />
                    <Zayavka />
                    <Blog />
                    <Footer />
                </div>
        </>
    )
}