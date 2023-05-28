import React from 'react'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer_top">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-md-6 col-lg-3">
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
                        <div className="col-xl-2 col-md-6 col-lg-2">
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
                        <div className="col-xl-3 col-md-6 col-lg-3">
                            <div className="footer_widget">
                                <h3 className="footer_title">
                                    Industries
                                </h3>
                                <ul>
                                    <li><a href="/">Chemicals</a></li>
                                    <li><a href="/">Automotive</a></li>
                                    <li><a href="/"> Consumer Goods</a></li>
                                    <li><a href="/">Life Science</a></li>
                                    <li><a href="/">Foreign Trade</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6 col-lg-4">
                            <div className="footer_widget">
                                <h3 className="footer_title">
                                    Subscribe
                                </h3>
                                <form action="#" className="newsletter_form">
                                    <input type="text" placeholder="Enter your mail" />
                                    <button type="submit">Subscribe</button>
                                </form>
                                <p className="newsletter_text">Esteem spirit temper too say adieus who direct esteem esteems
                                    luckily.</p>
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