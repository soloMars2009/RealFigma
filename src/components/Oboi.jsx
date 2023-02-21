import React from "react";
import h1 from '../images/4.png'
import h2 from '../images/5.png'
import h3 from '../images/6.png'
import h4 from '../images/7.png'



export default function Oboi() {
    return (
        <>

            <div className="container pt-5">
                <div className="row">
                    <div className="col-lg-6">
                        <h4>Дизайнерские обои <br /> для  дома и бизнеса</h4>
                    </div>
                    <div className="col-lg-6">
                        <p style={{ fontSize: '15px' }}>Но базовый вектор развития влечет за собой процесс внедрения и модернизации соответствующих условий <br /> активизации. В целом, конечно, сплочённость команды профессионалов требует определения и уточнения <br /> поставленных обществом задач. <br />
                            Разнообразный и богатый опыт говорит нам, что внедрение современных методик представляет собой <br /> интересный эксперимент проверки кластеризации усилий. Предварительные выводы неутешительны: <br /> базовый вектор развития создаёт предпосылки для дальнейших направлений развития. Не следует, однако, <br />  забывать, что граница обучения кадров прекрасно подходит для реализации своевременного выполнения <br /> сверхзадачи. Разнообразный и богатый опыт говорит нам, что высокое качество позиционных <br /> исследований, а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для позиций, занимаемых участниками в отношении поставленных задач. Принимая во внимание показатели успешности, реализация намеченных плановых заданий в значительной степени обусловливает важность анализа существующих паттернов поведения.</p>
                    </div>
                </div>


                <div className="row">
                    <div className="col-lg-3 col-sm-12">
                        <div className="card mb-3">
                            <img src={h1} className="card-img-top imgClass" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Создаем красивые стены</h5>
                                <p className="card-text">Используем различные технологии нанесения изображений. В нашем арсенале немецкое оборудование, Итальянские технологии холодного трансфера и другие бесшовные покрытия.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-12">
                        <div className="card mb-3">
                            <img src={h2} className="card-img-top imgClass" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Можно нанести любое изображение</h5>
                                <p className="card-text">В зависимости от выбранной технологии разрешение печати нанесённого изображения может составлять до 1440 dpi</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-12">
                        <div className="card mb-3">
                            <img src={h3} className="card-img-top imgClass" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Ваши стены - наш мольберт</h5>
                                <p className="card-text">Наши дизайнеры помогут с выбором качественного изображения либо создадут для вас индивидуальный проект с учётом ваших пожеланий.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-12">
                        <div className="card mb-3">
                            <img src={h4} className="card-img-top imgClass" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Обновить стены без ремонта</h5>
                                <p className="card-text">С помощью опыта нашей команды преобразить любые помещения не составит труда вне зависимости от масштаба или сложности задачи.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}