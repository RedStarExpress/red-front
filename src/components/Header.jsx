import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SearchModal from './SearchModal'
import logotip from "../assets/logatip.png"

function Header() {
    const [showSearchModal, setShowSearchModal] = useState(false)
    const [show, setShow] = useState(false)

    return (
        <>
            <header>
                <div className="header-area">
                    <div className="header-top_area d-none d-lg-block">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-xl-4 col-lg-4">
                                    <div className="logo">
                                        <Link to="/">
                                            <img src={logotip} alt="" style={{ width: "250px" }} />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-xl-8 col-md-8">
                                    <div className="header_right d-flex align-items-center">
                                        <div className="short_contact_list">
                                            <ul>
                                                <li><a href="mailto: RedstarExpress_uz@gmail.com" style={{ fontSize: "16px" }}> <i className="fa fa-envelope"></i> RedStarExpress_uz@gmail.com</a></li>
                                                <li><a href="tel: +998-90-665-15-25" style={{ fontSize: "16px" }}> <i className="fa fa-phone"></i>+998-90-665-15-25</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="sticky-header" className="main-header-area">
                        <div className="container">
                            <div className="header_bottom_border">
                                <div className="row align-items-center">
                                    <div className="col-12 d-block d-lg-none">
                                        <div className="logo" style={{ display: "flex", alignItems: "center" }}>
                                            <Link href="/">
                                                <img src={logotip} alt="" style={{ width: "200px" }} />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-xl-10 col-lg-10">
                                        <div className="main-menu  d-none d-lg-block">
                                            <nav>
                                                <ul id="navigation">
                                                    <li><Link to="/">Asosiy sahifa</Link></li>
                                                    <li><Link to="/track_code">Trek kod</Link></li>
                                                    <li><Link to="/news">Yangiliklar</Link></li>
                                                    <li><Link to="/services">Bizning xizmatlar</Link></li>
                                                    <li><Link to="/about">Biz haqimizda</Link></li>
                                                    <li><Link to="/contact_us">Bog'lanish</Link></li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                    <div className="col-xl-2 col-lg-2 d-none d-lg-block">
                                        <div className="Appointment justify-content-end">
                                            <div className="search_btn">
                                                <button style={{ background: "#FF3414", border: "none", color: "#fff", borderRadius: "50%", width: "40px", height: "40px", cursor: "pointer" }}
                                                    onClick={() => setShowSearchModal(true)}>
                                                    <i className="ti-search"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="mobile_menu d-block d-lg-none"><div className="slicknav_menu">
                                            <button id='btn' onClick={() => setShow(!show)} className="slicknav_btn slicknav_collapsed"
                                                style={{ outline: "none" }}>
                                                <span className="slicknav_menutxt">MENU</span><span className="slicknav_icon">
                                                    <span className="slicknav_icon-bar"></span><span className="slicknav_icon-bar">
                                                    </span><span className="slicknav_icon-bar"></span></span></button>
                                            <ul id='nav' className="slicknav_nav slicknav_hidden" aria-hidden="true" role="menu" style={{ display: show ? "block" : "none" }}>
                                                <ul id="navigation">
                                                    <li><Link onClick={() => setShow(!show)} to="/">Asosiy sahifa</Link></li>
                                                    <li><Link onClick={() => setShow(!show)} to="/track_code">Trek kod</Link></li>
                                                    <li><Link onClick={() => setShow(!show)} to="/news">Yangiliklar</Link></li>
                                                    <li><Link onClick={() => setShow(!show)} to="/services">Bizning xizmatlar</Link></li>
                                                    <li><Link onClick={() => setShow(!show)} to="/about">Biz haqimizda</Link></li>
                                                    <li><Link onClick={() => setShow(!show)} to="/contact_us">Bog'lanish</Link></li>
                                                </ul>
                                            </ul></div></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* <div id="sticky-header" className="main-header-area">
                        <div className="container">
                            <div className="header_bottom_border">
                                <div className="row align-items-center">
                                    <div className="col-12 d-block d-lg-none">
                                        <div className="logo">
                                            <Link to="/">
                                                <img src="img/logo.png" alt="" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-xl-9 col-lg-9">
                                        <div className="main-menu  d-none d-lg-block">
                                            <nav>
                                                <ul id="navigation">
                                                    <li><Link to="/">Asosiy sahifa</Link></li>
                                                    <li><Link to="/track_code">Trek kod</Link></li>
                                                    <li><Link to="/services">Bizning xizmatlar</Link></li>
                                                    <li><Link to="/contact_us">Bog'lanish</Link></li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                                        <div className="Appointment justify-content-end">
                                            <div className="search_btn">
                                                <button style={{ background: "#FF3414", border: "none", color: "#fff", borderRadius: "50%", width: "40px", height: "40px", cursor: "pointer" }}
                                                    onClick={() => setShowSearchModal(true)}>
                                                    <i className="ti-search"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="mobile_menu d-block d-lg-none"></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div> */}
                </div>
            </header>

            {
                showSearchModal && (
                    <SearchModal
                        setShowSearchModal={setShowSearchModal}
                    />
                )
            }
        </>
    )
}

export default Header