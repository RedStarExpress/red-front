import React from 'react'
import footerLogo from "../assets/logo-footer.png"

function Footer() {
    return (
        <footer className="footer">
            <div className="footer_top">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-md-6 col-lg-3">
                            <div className="footer_widget">
                                <img src={footerLogo} alt="" width="100%" />
                            </div>
                        </div>

                        <div className="col-xl-5 col-md-6 col-lg-3">
                            <p className='mb-3'>
                                Bizning RED STAR EXPRESS kargo kompaniyamiz o'z oldiga ulkan maqsadlar qo'ygan bo'lib, barchasini amalga oshirib kelmoqda. Kompaniyamiz ochilganiga ko'p bo'lmagan bo'lsada ishchilar ko'p yillik tajribaga ega va hattoki chet davlatlarda ishni o'rganib tajriba orttirganlar. Bu esa bizga O'zbekistonda yagona kamchiliklarsiz servisga ega bo'lishni va barcha davlatlardan mahsulotlarni davlatimiz fuqarolari uchun juda tez fursatda yetkazib berishni ta'minlaydi. REDSTAREXPRESS - YUKINGIZNI BIZGA ISHONING VA BUR ZUMDA QO'LINGIZGA OLING!
                            </p>
                        </div>

                        <div className="col-xl-2 col-md-6 col-lg-3">
                            <div className="footer_widget">
                                <h3 className="footer_title">
                                    Xizmatlar
                                </h3>
                                <ul>
                                    <li><a href="/">Avia kargo</a></li>
                                    <li><a href="/"></a>Avto kargo</li>
                                    <li><a href="/">Temir yo`l kargo</a></li>
                                    <li><a href="/"></a></li>
                                    <li><a href="/">Xitoydagi ombor xizmati</a></li>
                                </ul>

                            </div>
                        </div>
                        <div className="col-xl-2 col-md-6 col-lg-3">
                            <div className="footer_widget">
                                <h3 className="footer_title">
                                    Kompaniya
                                </h3>
                                <ul>
                                    <li><a href="/">Haqida</a></li>
                                    <li><a href="/">Yangiliklar</a></li>
                                    <li><a href="/">Mamnun mijozlar</a></li>
                                    <li><a href="/"> Nima uchun biz?</a></li>
                                </ul>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <div className="copy-right_text">
                <div className="container">
                    <div className="footer_border"></div>
                    <div className="row">
                        <div className="col-xl-12">
                            <p className="copy_right text-center">
                                © Copyright <a href="/" target="_blank" rel="noreferrer">RedStarExpress</a>. Barcha huquqlar himoyalangan. <br />
                                Designed by Keldiyor and DiLsHoDJoN
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer