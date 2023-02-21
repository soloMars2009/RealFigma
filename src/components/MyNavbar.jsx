import React from "react";
import img from '../images/1.png'
import h1 from '../images/2.png'
import { Link } from "react-router-dom";


export default function MyNavbar(){
    return(
        <>
        <img className="w-100" src={img} alt="" />
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-sm-12">
                    <img className="w-50" src={h1} alt="" />
                </div>
                <div className="col-lg-9 col-sm-12">
                    <div className="row">
                        <div className="col-lg-4 col-sm-12">
                        <input style={{borderRadius: '10px', borderColor: '#EDEDF2' }} className="mt-3 w-100" type="text" placeholder="🔎 поиск....." />
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <p className="mt-3">Позвонить нам:</p>
                            <h3>+7 (555) 888-98-66</h3>
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <p  className="mt-3">Написать нам:</p>
                            <h3>info@stenoprint.ru</h3>
                        </div>
                        <hr />
                        <div className="row">
                        <div className="col-lg-2 col-md-4 col-sm-12">
                               <Link style={{textAlign: 'end', textDecoration: 'none', color: 'black', paddingRight: "50px"}}  to='/home'> <p className="ms">Home</p></Link>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-12">
                            <Link  style={{textAlign: 'end', textDecoration: 'none', color: 'black', paddingRight: "50px"}}   to="/cot"><p className="ms">Каталог</p></Link>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-12">
                            <Link  style={{textAlign: 'end', textDecoration: 'none', color: 'black', paddingRight: "50px"}}   to="/"><p className="ms">Услуги</p></Link>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-12">
                              <Link  style={{textAlign: 'end', textDecoration: 'none', color: 'black', paddingRight: "50px"}}   to="/"><p className="ms">О студии</p></Link> 
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-12">
                              <Link  style={{textAlign: 'end', textDecoration: 'none', color: 'black', paddingRight: "50px"}}  to="/port"><p className="ms">Портфолио</p></Link>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-12">
                               <Link style={{textAlign: 'end', textDecoration: 'none', color: 'black', paddingRight: "50px"}} to="/evre"> <p className="ms">Блог</p> </Link>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}