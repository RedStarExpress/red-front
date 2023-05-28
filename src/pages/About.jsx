import React from 'react'
import ContactActionArea from '../components/ContactActionArea'
import ChoseArea from '../components/ChoseArea'
import EstimateArea from '../components/EstimateArea'
import ContactLocation from '../components/ContactLocation'
import CounterArea from '../components/CounterArea'

function About() {
    return (
        <>
            <div class="bradcam_area bradcam_bg_1">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="bradcam_text text-center">
                                <h3>Biz haqimizda</h3>

                                <span style={{ color: "#fff", fontSize: "24px", fontWeight: "500" }}>
                                    Siz ushbu sahifada RedStarExpress kompaniyasi xizmatlari bilan tanishishingiz mumkin.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="service_area">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-lg-4">
                            <div class="single_service">
                                <div class="thumb">
                                    <img src="img/service/1.png" alt="" />
                                </div>
                                <div class="service_info">
                                    <h3><a href="service_details.html">Ocean Freight</a></h3>
                                    <p>Esteem spirit temper too say adieus who direct esteem.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div class="single_service">
                                <div class="thumb">
                                    <img src="img/service/2.png" alt="" />
                                </div>
                                <div class="service_info">
                                    <h3><a href="service_details.html">Land Transport</a></h3>
                                    <p>Esteem spirit temper too say adieus who direct esteem.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">

                            <div class="single_service">
                                <div class="thumb">
                                    <img src="img/service/3.png" alt="" />
                                </div>
                                <div class="service_info">
                                    <h3><a href="service_details.html">Air Freight</a></h3>
                                    <p>Esteem spirit temper too say adieus who direct esteem.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div class="single_service">
                                <div class="thumb">
                                    <img src="img/service/4.png" alt="" />
                                </div>
                                <div class="service_info">
                                    <h3><a href="service_details.html">Ocean Freight</a></h3>
                                    <p>Esteem spirit temper too say adieus who direct esteem.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div class="single_service">
                                <div class="thumb">
                                    <img src="img/service/5.png" alt="" />
                                </div>
                                <div class="service_info">
                                    <h3><a href="service_details.html">Land Transport</a></h3>
                                    <p>Esteem spirit temper too say adieus who direct esteem.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">

                            <div class="single_service">
                                <div class="thumb">
                                    <img src="img/service/6.png" alt="" />
                                </div>
                                <div class="service_info">
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