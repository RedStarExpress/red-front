import React from 'react'
import footerLogo from "../assets/footer-logo.jpg"

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
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident molestiae, nulla nisi eius eligendi recusandae quae delectus rem porro, odio voluptas ut ab, perferendis optio hic facere voluptates neque omnis animi enim quod eveniet! Culpa beatae eos, veniam possimus molestiae non eveniet, magni nihil vitae, iure tempora provident facilis natus.
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