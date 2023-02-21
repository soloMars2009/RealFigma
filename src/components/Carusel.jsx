import React from "react";






export default function Carusel() {
    return (
        <>


            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="imgStyle pt-5 pb-5">
                            <h1 className="textFont">Художественное оформление <br /> вертикальных поверхностей</h1>
                            <p className="pt-3 textFont ">Используем различные технологии нанесения изображений. В нашем арсенале немецкое <br /> оборудование, Итальянские технологии холодного трансфера и другие бесшовные <br /> покрытия.</p>
                            {/* <button className="buttomStyl textFont">Узнать подробнее</button> */}
                        </div>
                    </div>
                    <div className="carousel-item">
                    <div className="imgStyle pt-5 pb-5">
                            <h1 className="textFont">Художественное оформление <br /> вертикальных поверхностей</h1>
                            <p className="pt-3 textFont">Используем различные технологии нанесения изображений. В нашем арсенале немецкое <br /> оборудование, Итальянские технологии холодного трансфера и другие бесшовные <br /> покрытия.</p>
                            {/* <button className="buttomStyl textFont">Узнать подробнее</button> */}
                        </div>
                    </div>
                    <div className="carousel-item">
                    <div className="imgStyle pt-5 pb-5">
                            <h1 className="textFont">Художественное оформление <br /> вертикальных поверхностей</h1>
                            <p className="pt-3 textFont">Используем различные технологии нанесения изображений. В нашем арсенале немецкое <br /> оборудование, Итальянские технологии холодного трансфера и другие бесшовные <br /> покрытия.</p>
                            {/* <button className="buttomStyl textFont">Узнать подробнее</button> */}
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </>
    )
}