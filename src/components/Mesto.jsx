import React from "react";
import h1 from '../images/16.png'
import h2 from '../images/17.png'







export default function Mesto() {
    return (
        <>

            <div className="container">

                <h2>Место применения</h2>
                <p>С помощью опыта нашей команды преобразить любые помещения не составит труда вне зависимости от масштаба или сложности задачи.</p>


                <div class="row row-cols-1 row-cols-md-2 row-cols-sm-12 g-4">
                    <div className="col">
                        <div className="card">
                            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img  src={h1} className="d-block w-100 ho" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={h1} className="d-block w-100 ho" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={h1} className="d-block w-100 ho" alt="..." />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Жилые помещения</h5>
                                <p className="card-text">Есть над чем задуматься: акционеры крупнейших компаний будут разоблачены.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div id="carouselExampleIndicators1" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={h2} className="d-block w-100 ho" alt="..."/>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={h2} className="d-block w-100  ho" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={h2} className="d-block w-100 ho" alt="..." />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Офисы, рестораны, кафе</h5>
                                <p className="card-text">Есть над чем задуматься: акционеры крупнейших компаний будут разоблачены.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                        <div id="carouselExampleIndicators2" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={h1} className="d-block w-100 ho" alt="..."/>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={h1} className="d-block w-100 ho" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={h1} className="d-block w-100 ho" alt="..." />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Жилые помещения</h5>
                                <p className="card-text">Есть над чем задуматься: акционеры крупнейших компаний будут разоблачены.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                        <div id="carouselExampleIndicators6" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleIndicators6" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators6" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators6" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={h2} className="d-block w-100 ho" alt="..."/>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={h2} className="d-block w-100 ho" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={h2} className="d-block w-100 ho" alt="..." />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators6" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators6" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Офисы, рестораны, кафе</h5>
                                <p className="card-text">Есть над чем задуматься: акционеры крупнейших компаний будут разоблачены</p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </>
    )
}