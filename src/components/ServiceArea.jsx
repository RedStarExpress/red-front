import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function ServiceArea() {
    return (
        <div className="service_area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="section_title mb-50 text-center">
                            <h3>
                                Services We Offer
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <OwlCarousel loop margin={10} nav className="owl-theme service_active owl-carousel">
                            <div className="single_service item">
                                <div className="thumb">
                                    <img src="img/service/1.png" alt="" />
                                </div>
                                <div className="service_info">
                                    <h3><a href="service_details.html">Ocean Freight</a></h3>
                                    <p>Esteem spirit temper too say adieus who direct esteem.</p>
                                </div>
                            </div>
                            <div className="single_service item">
                                <div className="thumb">
                                    <img src="img/service/2.png" alt="" />
                                </div>
                                <div className="service_info">
                                    <h3><a href="service_details.html">Land Transport</a></h3>
                                    <p>Esteem spirit temper too say adieus who direct esteem.</p>
                                </div>
                            </div>
                            <div className="single_service item">
                                <div className="thumb">
                                    <img src="img/service/3.png" alt="" />
                                </div>
                                <div className="service_info">
                                    <h3><a href="service_details.html">Air Freight</a></h3>
                                    <p>Esteem spirit temper too say adieus who direct esteem.</p>
                                </div>
                            </div>
                            <div className="single_service item">
                                <div className="thumb">
                                    <img src="img/service/1.png" alt="" />
                                </div>
                                <div className="service_info">
                                    <h3><a href="service_details.html">Ocean Freight</a></h3>
                                    <p>Esteem spirit temper too say adieus who direct esteem.</p>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceArea