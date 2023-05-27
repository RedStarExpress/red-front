import React from 'react'

function EstimateArea() {
    return (
        <div className="Estimate_area overlay">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-5">
                        <div className="Estimate_info">
                            <h3>Get free Estimate</h3>
                            <p>Esteem spirit temper too say adieus who direct esteem. It look estee luckily or picture
                                placing.</p>
                            <a href="/" className="boxed-btn3">+10 672 457 356</a>
                        </div>
                    </div>
                    <div className="col-xl-8 col-lg-8 col-md-7">
                        <div className="form">
                            <form action="#">
                                <div className="row">
                                    <div className="col-xl-6">
                                        <div className="input_field">
                                            <input type="text" placeholder="Your name" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="input_field">
                                            <input type="email" placeholder="Email" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="input_field">
                                            <select className="wide" style={{ display: "none" }}>
                                                <option data-display="Product type">Product type</option>
                                                <option value="1">small</option>
                                                <option value="2">standard</option>
                                                <option value="3">high</option>
                                            </select>
                                            <div class="nice-select wide" tabindex="0"><span class="current">Product type</span><ul class="list"><li data-value="Product type" data-display="Product type" class="option selected">Product type</li><li data-value="1" class="option">small</li><li data-value="2" class="option">standard</li><li data-value="3" class="option">high</li></ul></div>

                                        </div>
                                    </div>

                                    <div class="col-xl-6">
                                        <div class="input_field">
                                            <select class="wide" style={{ display: "none" }}>
                                                <option data-display="Product type">Product type</option>
                                                <option value="1">small</option>
                                                <option value="2">standard</option>
                                                <option value="3">high</option>
                                            </select>
                                            <div class="nice-select wide" tabindex="0"><span class="current">Product type</span><ul class="list"><li data-value="Product type" data-display="Product type" class="option selected">Product type</li><li data-value="1" class="option">small</li><li data-value="2" class="option">standard</li><li data-value="3" class="option">high</li></ul></div>
                                        </div>
                                    </div>

                                    <div className="col-xl-12">
                                        <div className="input_field">
                                            <textarea placeholder="Message"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-xl-12">
                                        <div className="input_field">
                                            <button className="boxed-btn3-line" type="submit">Send Estimate</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EstimateArea