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
                        <h3> <img src="img/icon/address.svg" alt="" /> Location</h3>
                        <p>600/D, Kings road, Green lane
                            NewYork-2563</p>
                    </div>
                </div>
                <div className="col-xl-3 col-md-3">
                    <div className="single_location">
                        <h3> <img src="img/icon/support.svg" alt="" /> Location</h3>
                        <p>+10 267 3563 4562 <br />
                            support@logistico.com</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactLocation