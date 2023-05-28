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
                                Biz ushbu xizmatlarni taklif qilamiz
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
                                    <h3><a href="service_details.html">Temir yo`l orqali</a></h3>
                                    <p>Extiyot qilinishi kerak bo`lgan katta hajmdagi stanok, ehtiyot qismlari, avtomobil yoki shu kabi mahsulotlar uchun</p>
                                </div>
                            </div>
                            <div className="single_service item">
                                <div className="thumb">
                                    <img src="img/service/2.png" alt="" />
                                </div>
                                <div className="service_info">
                                    <h3><a href="service_details.html">Avto kargo xizmati</a></h3>
                                    <p>Istalgan hajmdagi yuklaringizni ancha arzon va sifatli yetkazib berish uchun</p>
                                </div>
                            </div>
                            <div className="single_service item">
                                <div className="thumb">
                                    <img src="img/service/3.png" alt="" />
                                </div>
                                <div className="service_info">
                                    <h3><a href="service_details.html">Avia kargo xizmati</a></h3>
                                    <p>Eng tez va oson yo`l bilan olib kelish xizmati, faqat vazni uchun to`lanadi va tayyor, darhol qo`lingizga olasiz</p>
                                </div>
                            </div>
                            <div className="single_service item">
                                <div className="thumb">
                                    <img src="img/service/1.png" alt="" />
                                </div>
                                <div className="service_info">
                                    <h3><a href="service_details.html">Temir yo`l orqali</a></h3>
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