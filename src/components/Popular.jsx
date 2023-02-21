import React from "react";
import a1 from '../images/12.png'
import a2 from '../images/13.png'
import a3 from '../images/14.png'
import a4 from '../images/15.png'





export default function Popular() {
    return (
        <>
            <div className="container">
                <h3 className="pb-3">Популярные товары</h3>

                <span className="mss">Дизайнерские обои</span>   <span style={{ color: '#e9eaef' }}>dccdcd</span>  <span className="mss">Виниловые обои</span> <span style={{ color: '#e9eaef' }}>dccdcd</span>  <span className="mss">Фирменные обои</span>


                <div className="row pt-5">
                    <div className="col-lg-3 col-sm-12">
                        <div className="card h-100">
                            <img src={a1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-7 col-sm-12">
                                        <p>Floraison</p>
                                    </div>
                                    <div className="col-lg-5 col-sm-12">
                                        <p>от 2 552 ₽</p>
                                    </div>
                                </div>
                                <hr />
                                <button className="BottomStyle">Подробнее</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-12">
                        <div className="card h-100">
                            <img src={a2} className="card-img-top" alt="..." />
                            <div className="card-body">
                            <div className="row">
                                    <div className="col-lg-7 col-sm-12">
                                        <p>Floraison</p>
                                    </div>
                                    <div className="col-lg-5 col-sm-12">
                                        <p>от 2 552 ₽</p>
                                    </div>
                                </div>
                                <hr />
                                <button className="BottomStyle">Подробнее</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-12">
                        <div className="card h-100">
                            <img src={a3} className="card-img-top" alt="..." />
                            <div className="card-body">
                            <div className="row">
                                    <div className="col-lg-7 col-sm-12">
                                        <p>Floraison</p>
                                    </div>
                                    <div className="col-lg-5 col-sm-12">
                                        <p>от 2 552 ₽</p>
                                    </div>
                                </div>
                                <hr />
                                <button className="BottomStyle">Подробнее</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-12">
                        <div className="card h-100">
                            <img src={a4} className="card-img-top" alt="..." />
                            <div className="card-body">
                            <div className="row">
                                    <div className="col-lg-7 col-sm-12">
                                        <p>Floraison</p>
                                    </div>
                                    <div className="col-lg-5 col-sm-12">
                                        <p>от 2 552 ₽</p>
                                    </div>
                                </div>
                                <hr />
                                <button className="BottomStyle">Подробнее</button>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="text-end pt-5 pb-5">Смотреть все новинки</p>
            </div>


        </>
    )
}