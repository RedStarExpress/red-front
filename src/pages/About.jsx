import React from 'react'
import ContactActionArea from '../components/ContactActionArea'
import ChoseArea from '../components/ChoseArea'
import EstimateArea from '../components/EstimateArea'
import ContactLocation from '../components/ContactLocation'
import CounterArea from '../components/CounterArea'

function About() {
    return (
        <>
            <div className="bradcam_area bradcam_bg_1">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="bradcam_text text-center">
                                <h3>Biz haqimizda</h3>

                                <span style={{ color: "#fff", fontSize: "24px", fontWeight: "500" }}>
                                    Siz ushbu sahifada RedStarExpress kompaniyasi xizmatlari bilan tanishishingiz mumkin.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="service_area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-4">
                            <div className="single_service">
                                <div className="thumb">
                                    <img src="img/service/1.png" alt="" />
                                </div>
                                <div className="service_info">
                                    <h3><a href="service_details.html">Ocean Freight</a></h3>
                                    <p>Esteem spirit temper too say adieus who direct esteem.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="single_service">
                                <div className="thumb">
                                    <img src="img/service/2.png" alt="" />
                                </div>
                                <div className="service_info">
                                    <h3><a href="service_details.html">Land Transport</a></h3>
                                    <p>Esteem spirit temper too say adieus who direct esteem.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">

                            <div className="single_service">
                                <div className="thumb">
                                    <img src="img/service/3.png" alt="" />
                                </div>
                                <div className="service_info">
                                    <h3><a href="service_details.html">Air Freight</a></h3>
                                    <p>Esteem spirit temper too say adieus who direct esteem.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="single_service">
                                <div className="thumb">
                                    <img src="img/service/4.png" alt="" />
                                </div>
                                <div className="service_info">
                                    <h3><a href="service_details.html">Ocean Freight</a></h3>
                                    <p>Esteem spirit temper too say adieus who direct esteem.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="single_service">
                                <div className="thumb">
                                    <img src="img/service/5.png" alt="" />
                                </div>
                                <div className="service_info">
                                    <h3><a href="service_details.html">Land Transport</a></h3>
                                    <p>Esteem spirit temper too say adieus who direct esteem.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">

                            <div className="single_service">
                                <div className="thumb">
                                    <img src="img/service/6.png" alt="" />
                                </div>
                                <div className="service_info">
                                    <h3><a href="service_details.html">Air Freight</a></h3>
                                    <p>Esteem spirit temper too say adieus who direct esteem.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ContactActionArea />

            <ChoseArea />

            <CounterArea />

            <EstimateArea />

            <ContactLocation />
        </>
    )
}

export default About