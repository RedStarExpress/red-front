import React, { useEffect, useState } from 'react'
import axiosInstance, { url } from '../utils/config'
import { Link } from 'react-router-dom'

function News() {
    const [data, setData] = useState()

    useEffect(() => {
        axiosInstance.get(`/news/get-list??page=${0}&size=${10}`)
            .then((res) => {
                console.log(res.data);
                setData(res.data.content);
            })
    }, [])

    return (
        <>
            <div class="bradcam_area bradcam_bg_1">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="bradcam_text text-center">
                                <h3>Yangiliklar</h3>

                                <span style={{ color: "#fff", fontSize: "24px", fontWeight: "500" }}>
                                    Siz ushbu sahifada RedStarExpress kompaniyasining yangiliklari bilan tanishishingiz mumkin.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="service_area">
                <div class="container">
                    <div class="row">
                        {
                            data?.length && data?.map((item) => {
                                return (
                                    <div class="col-md-6 col-lg-4">
                                        <div class="single_service">
                                            <div class="thumb">
                                                {
                                                    !item?.media ? (
                                                        <>
                                                            <a href={`${url}/file/view/${item?.medias[0]}`} target="_blank" rel="noopener noreferrer">
                                                                <img src={`${url}/file/view/${item?.medias[0]}`} className="edit-image"
                                                                    height="250px   " width="100%" alt="" />
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
                                            <div class="service_info">
                                                <h3><Link to={`/news_detail/${item.id}`}>{item.title}</Link></h3>
                                                <p>{item.shortInformation}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        {/* <div class="col-md-6 col-lg-4">
                            <div class="single_service">
                                <div class="thumb">
                                    <img src="img/service/2.png" alt="" />
                                </div>
                                <div class="service_info">
                                    <h3><a href="service_details.html">Land Transport</a></h3>
                                    <p>Esteem spirit temper too say adieus who direct esteem.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">

                            <div class="single_service">
                                <div class="thumb">
                                    <img src="img/service/3.png" alt="" />
                                </div>
                                <div class="service_info">
                                    <h3><a href="service_details.html">Air Freight</a></h3>
                                    <p>Esteem spirit temper too say adieus who direct esteem.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div class="single_service">
                                <div class="thumb">
                                    <img src="img/service/4.png" alt="" />
                                </div>
                                <div class="service_info">
                                    <h3><a href="service_details.html">Ocean Freight</a></h3>
                                    <p>Esteem spirit temper too say adieus who direct esteem.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div class="single_service">
                                <div class="thumb">
                                    <img src="img/service/5.png" alt="" />
                                </div>
                                <div class="service_info">
                                    <h3><a href="service_details.html">Land Transport</a></h3>
                                    <p>Esteem spirit temper too say adieus who direct esteem.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div class="single_service">
                                <div class="thumb">
                                    <img src="img/service/6.png" alt="" />
                                </div>
                                <div class="service_info">
                                    <h3><a href="service_details.html">Air Freight</a></h3>
                                    <p>Esteem spirit temper too say adieus who direct esteem.</p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default News