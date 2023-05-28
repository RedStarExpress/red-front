import React from 'react'
import { Link } from 'react-router-dom'

function SliderArea() {
    return (
        <div className="slider_area">
            <div className="single_slider  d-flex align-items-center slider_bg_1">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-xl-8">
                            <div className="slider_text text-center justify-content-center">
                                <h3>Xitoy davlatidan yetkazib berish xizmati</h3>
                                <Link className="boxed-btn3" to="/services">Bizning xizmatlar</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SliderArea