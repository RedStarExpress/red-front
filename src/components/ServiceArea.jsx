import React, { useEffect, useState } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { url } from '../utils/config';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ServiceArea() {
    const [data, setData] = useState()

    useEffect(() => {
        axios.get(`${url}/news/get-list?page=${0}&size=${10}`)
            .then((res) => {
                console.log(res.data);
                setData(res.data.content);
            })
    }, [])

    const options = {
        responsiveClass: true,
        nav: true,
        dots: false,
        loop: true,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            }
        },
    };

    return (
        <div className="service_area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="section_title mb-50 text-center">
                            <h3>
                                Biz ushbu xizmatlarni taklif qilamiz
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        {
                            data?.length > 0 && (
                                <OwlCarousel {...options}  loop margin={10} nav className="owl-theme service_active owl-carousel">
                                    {
                                        data?.map((item) => {
                                            return (
                                                <div className="single_service item">
                                                    <div className="thumb">
                                                        {
                                                            !item?.media ? (
                                                                <>
                                                                    <a href={`${url}/file/view/${item?.medias[0]}`} target="_blank" rel="noopener noreferrer">
                                                                        <img src={`${url}/file/view/${item?.medias[0]}`} className="edit-image"
                                                                            width="100%" alt="" />
                                                                    </a>
                                                                </>
                                                            ) :
                                                                (
                                                                    <>
                                                                        <iframe height="250px" width="100%" src={`https://www.youtube.com/embed/${item?.media?.split("=")?.[1]}`} title="bir soniya" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                                                    </>
                                                                )
                                                        }
                                                    </div>
                                                    <div className="service_info">
                                                        <h3><Link to={`/news_detail/${item.id}`}>{item.title}</Link></h3>
                                                        <p>{item.shortInformation}</p>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </OwlCarousel>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceArea