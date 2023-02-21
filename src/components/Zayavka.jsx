import React from "react";
import ava from '../images/19.png'




 export default function Zayavka(){
    return(
        <>
        
        <div className="container mt-5  divStyl">
            <div className="row">
                <div className="col-lg-8 col-sm-12">
                    <h2>Оставьте заявку</h2>
                    <p>Оставьте заявку, наш менеджер свяжется с Вами в ближайшее время и ответит на все интересующие вопросы.</p>
                    <div className="row">
                        <div className="col-lg-6 col-sm-12">
                            <p>Ваше имя:</p>
                            <input className="FInput" type="text" placeholder="иван" />
                        </div>
                        <div className="col-lg-6 col-sm-12">
                            <p>Номер телефона:</p>
                            <input className="FInput" type="text" placeholder="+7(__)___-__-__" />
                        </div>
                        <button className="Fd mb-5">Отправить заявку</button> 
                    </div>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <img className="w-100 go" src={ava} alt="" />
                </div>
            </div>
        </div>
        
        </>
    )
 }