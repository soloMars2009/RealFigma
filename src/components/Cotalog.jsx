import React from "react";
import h1 from "../images/24.png"
import h2 from "../images/25.png"
import h3 from "../images/20.png"
import h4 from "../images/21.png"
import h6 from "../images/27.png"
import h7 from "../images/14.png"
import h8 from "../images/28.png"
import h10 from "../images/29.png"
import Oboi1 from "./Oboi1";
import Popular from "./Popular";
import Mesto from "./Mesto";
import Blog from "./Blog";
import Zayavka from "./Zayavka";
import Footer from "./Footer";




export default function Catalog() {
    return (
        <div className="d">

            <img className="w-100" src={h1} alt="" />



            <div className="container">
                <div class="row row-cols-1 row-cols-md-3 g-4 pt-5">
                    <div class="col">
                        <div class="card">
                            <img src={h2} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={h3} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={h4} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="row pt-5">
                    <div className="col-lg-6 col-sm-12">
                        <h2>SEO text</h2>
                    </div>
                    <div className="col-lg-6 6 col-sm-12">
                        <p>Разнообразный и богатый опыт говорит нам, что внедрение современных методик представляет собой интересный эксперимент проверки кластеризации усилий. Предварительные выводы неутешительны: базовый вектор развития создаёт предпосылки для дальнейших направлений развития. Предварительные выводы неутешительны: базовый вектор развития создаёт предпосылки для направлений развития.</p>
                    </div>
                </div>



                < Oboi1 />
                <Popular />


            </div>


            <div style={{ backgroundColor: 'white', borderRadius: '20px' }} className="container w-50">
                <div className="container w-100">
                    <div className="row">
                        <div className="col-lg-6 col-sm-12 pt-5">
                            <h1>Отправьте нам свой дизайн <br /> на проверку или создайте <br /> собственный дизайн обоев</h1>
                            <p>Оставьте заявку, наш менеджер свяжется с Вами в ближайшее время и ответит на все интересующие вопросы.</p>
                            <img className="w-100" src={h6} alt="" />
                        </div>
                        <div className="col-lg-6 col-sm-12 pt-5">
                            <h6>У вас есть свой дизайн?</h6>
                            <button className="boSty">Да, отправить на проверку</button>
                            <button className="s mt-2">Нет, нужна помощь дизайнера</button>
                            <p className="pt-4">Загрузите ваш дизайн:</p>
                            <button className="sa">Прикрепить файл...</button>
                            <p className="pt-4">Ваше имя:</p>
                            <button className="sa">Иван</button>
                            <p className="pt-4">Номер телефона:</p>
                            <button className="sa">+7 (___) ___-__-__</button>
                            <button className="ds mt-5">Оформить заказ</button>
                        </div>
                    </div>
                </div>
            </div>
            <Mesto className="pt-5" />


            <div className="container">
                <h3 className="pt-5">Отзывы</h3>
                <p>С помощью опыта нашей команды преобразить любые помещения не составит труда вне зависимости от масштаба или сложности задачи.</p>
                <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-12">
                        <div class="card">
                            <img src={h7} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Мария </h5>
                                <p class="card-text">С помощью опыта нашей команды преобразить любые помещения не составит труда вне зависимости от масштаба или сложности задачи.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                        <div class="card">
                            <img src={h7} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Мария </h5>
                                <p class="card-text">С помощью опыта нашей команды преобразить любые помещения не составит труда вне зависимости от масштаба или сложности задачи.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                        <div class="card">
                            <img src={h7} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Мария </h5>
                                <p class="card-text">С помощью опыта нашей команды преобразить любые помещения не составит труда вне зависимости от масштаба или сложности задачи.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                        <div class="card">
                            <img src={h7} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Мария </h5>
                                <p class="card-text">С помощью опыта нашей команды преобразить любые помещения не составит труда вне зависимости от масштаба или сложности задачи.</p>
                            </div>
                        </div>                      
                    </div>
                </div>



                <div className="row pt-5">
                    <div className="col-lg-6 col-sm-12">
                        <img className="w-100" src={h8} alt="" />
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <h5>Мы используем разные техники оформления</h5>
                        <p>Разнообразный и богатый опыт говорит нам, что внедрение современных методик представляет собой интересный эксперимент проверки кластеризации усилий. Предварительные выводы неутешительны: базовый вектор развития создаёт предпосылки для дальнейших направлений развития. Не следует, однако, забывать, что граница обучения кадров прекрасно подходит для реализации своевременного выполнения сверхзадачи. Разнообразный и богатый опыт говорит нам, что высокое качество позиционных исследований, а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для позиций, занимаемых участниками в отношении поставленных задач.</p>
                    </div>
                </div>


                <Blog />


                <h4>Материалы</h4>
                <p>С помощью опыта нашей команды преобразить любые помещения не составит труда вне зависимости от масштаба или сложности задачи.</p>



<div class="row">
  <div class="col-lg-2 col-md-4 col-sm-12 ">
    <div class="card">
      <img src={h10} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Scandi</h5>
        <p class="card-text">С помощью опыта нашей команды преобразить любые помещения не составит труда.</p>
      </div>
    </div>
  </div>
  <div class="col-lg-2 col-md-4 col-sm-12 ">
    <div class="card">
      <img src={h10} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Scandi</h5>
        <p class="card-text">С помощью опыта нашей команды преобразить любые помещения не составит труда.</p>
      </div>
    </div>
  </div>
  <div class="col-lg-2 col-md-4 col-sm-12 ">
    <div class="card">
      <img src={h10} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Scandi</h5>
        <p class="card-text">С помощью опыта нашей команды преобразить любые помещения не составит труда.</p>
      </div>
    </div>
  </div>
  <div class="col-lg-2 col-md-4 col-sm-12 ">
    <div class="card">
      <img src={h10} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Scandi</h5>
        <p class="card-text">С помощью опыта нашей команды преобразить любые помещения не составит труда.</p>
      </div>
    </div>
  </div>
  <div class="col-lg-2 col-md-4 col-sm-12 ">
    <div class="card">
      <img src={h10} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Scandi</h5>
        <p class="card-text">С помощью опыта нашей команды преобразить любые помещения не составит труда.</p>
      </div>
    </div>
  </div>
  <div class="col-lg-2 col-md-4 col-sm-12 ">
    <div class="card">
      <img src={h10} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Scandi</h5>
        <p class="card-text">С помощью опыта нашей команды преобразить любые помещения не составит труда.</p>
      </div>
    </div>
  </div>
</div>

<Zayavka />

<Footer />


            </div>
        </div>
    )
}