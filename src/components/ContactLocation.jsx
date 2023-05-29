import React from 'react'
import { Link } from 'react-router-dom'
import logotip from "../assets/logatip.png"

function ContactLocation() {
    return (
        <div className="contact_location">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="location_left">
                            <div className="logo">
                                <Link to="/">
                                    <img src={logotip} alt="" style={{ width: "250px" }} />
                                </Link>
                            </div>
                            <ul>
                                <li><a target='_blank' rel="noreferrer" href="http://instagram.com/RedStarExpress.uz"> <i className="fa fa-instagram"></i> </a></li>
                                <li><a target='_blank' rel="noreferrer" href="http://redstarexpress_uz@gmail.com"> <i className="fa fa-google-plus"></i> </a></li>
                                <li><a target='_blank' rel="noreferrer" href="http://t.me/RedStarExpress"> <i className="fa fa-telegram"></i> </a></li>
                                <li><a target='_blank' rel="noreferrer" href="http://Youtube.com/Redstarexpress_uz"> <i className="fa fa-youtube"></i> </a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-3">
                        <div className="single_location">
                            <h3> <img src="img/icon/address.svg" alt="" /> Manzil</h3>
                            <p> Toshkent shahar, Sergeli tumani</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-3">
                        <div className="single_location">
                            <h3> <img src="img/icon/support.svg" alt="" /> Bog'lanish</h3>
                            <p>+998 90 665 1525 <br />
                                RedStarExpress_uz@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactLocation