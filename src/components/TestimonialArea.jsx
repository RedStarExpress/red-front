import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { styled } from 'styled-components';

function TestimonialArea() {
  return (
    <Wrapper className="testimonial_area">
        <div className="container">
            <div className="row">
                <div className="col-xl-7">
                    <OwlCarousel items={1} loop margin={10} nav className="owl-theme testmonial_active owl-carousel">
                        <div className="single_carousel">
                            <div className="single_testmonial text-center">
                                <div className="quote">
                                    <img src="img/svg_icon/quote.svg" alt="" />
                                </div>
                                <p>Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor sollicitudin.
                                    Pellentesque id dolor tempor sapien feugiat ultrices.</p>
                                <div className="testmonial_author">
                                    <div className="thumb">
                                        <img src="img/case/testmonial.png" alt="" />
                                    </div>
                                    <h3>Robert Thomson</h3>
                                    <span>Business Owner</span>
                                </div>
                            </div>
                        </div>
                        <div className="single_carousel">
                            <div className="single_testmonial text-center">
                                <div className="quote">
                                    <img src="img/svg_icon/quote.svg" alt="" />
                                </div>
                                <p>Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor sollicitudin.
                                    Pellentesque id dolor tempor sapien feugiat ultrices.</p>
                                <div className="testmonial_author">
                                    <div className="thumb">
                                        <img src="img/case/testmonial.png" alt="" />
                                    </div>
                                    <h3>Robert Thomson</h3>
                                    <span>Business Owner</span>
                                </div>
                            </div>
                        </div>
                        <div className="single_carousel">
                            <div className="single_testmonial text-center">
                                <div className="quote">
                                    <img src="img/svg_icon/quote.svg" alt="" />
                                </div>
                                <p>Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor sollicitudin.
                                    Pellentesque id dolor tempor sapien feugiat ultrices.</p>
                                <div className="testmonial_author">
                                    <div className="thumb">
                                        <img src="img/case/testmonial.png" alt="" />
                                    </div>
                                    <h3>Robert Thomson</h3>
                                    <span>Business Owner</span>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
        </div>
    </Wrapper>
  )
}

export default TestimonialArea

const Wrapper = styled.section`
    .owl-dots .owl-dot span{
        background-color: transparent;
    }

    .owl-nav {
        display: none;
    }

    .owl-theme .owl-dots .owl-dot.active span, {
        background-color: transparent;
    }

    .owl-theme .owl-dots .owl-dot:hover span, {
        background-color: transparent;
    }
`