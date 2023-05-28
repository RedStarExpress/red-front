import React from 'react'

function ContactLocation() {
  return (
    <div className="contact_location">
        <div className="container">
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="location_left">
                        <div className="logo">
                            <a href="index.html">
                                <img src="img/logo.png" alt="" />
                            </a>
                        </div>
                        <ul>
                            <li><a href="/"> <i className="fa fa-facebook"></i> </a></li>
                            <li><a href="/"> <i className="fa fa-google-plus"></i> </a></li>
                            <li><a href="/"> <i className="fa fa-twitter"></i> </a></li>
                            <li><a href="/"> <i className="fa fa-youtube"></i> </a></li>
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
                        <h3> <img src="img/icon/support.svg" alt="" /> Bog`lanish</h3>
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