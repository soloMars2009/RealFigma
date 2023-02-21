import React from 'react'
import h1 from '../images/8.png'
import h2 from '../images/9.png'
import h3 from '../images/10.png'
import h4 from '../images/11.png'



export default function Uslugi() {
    return (
        <>

            <div className="container">
                <h1>Наши услуги</h1>
                <p>С помощью опыта нашей команды преобразить любые помещения не составит труда вне <br /> зависимости от масштаба или сложности задачи.</p>
                <div class="row">
                    <div className="col-lg-3 col-sm-12">
                        <div className="card">
                            <img src={h1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Создание уникального <br /> дизайна в квартире, доме, <br /> офисе</h5>
                                <p className="card-text">Итальянские технологии холодного <br /> трансфера и другие бесшовные <br /> покрытия.</p>
                                <p>Узнать подробнее </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-12">
                        <div className="card">
                            <img src={h2} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Оформление офисов <br /> и коммерческих помещений <br /> в фирменном стиле</h5>
                                <p className="card-text">Итальянские технологии холодного  трансфера и другие бесшовные <br /> покрытия.</p>
                                <p>Узнать подробнее</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-12">
                        <div className="card">
                            <img src={h3} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Функциональный дизайн. <br /> Нанесение указателей, <br /> вывесок</h5>
                                <p className="card-text">Итальянские технологии холодного <br /> трансфера и другие бесшовные <br /> покрытия.</p>
                                <p>Узнать подробнее </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-12">
                        <div className="card">
                            <img src={h4} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Печать фотографий <br /> и коллажей</h5>
                                <p className="card-text">Итальянские технологии холодного <br /> трансфера и другие бесшовные <br /> покрытия.</p>
                                <p>Узнать подробнее </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}