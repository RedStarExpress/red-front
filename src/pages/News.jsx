import React, { useEffect, useState } from 'react'
import axiosInstance, { url } from '../utils/config'
import { Link } from 'react-router-dom'

function News() {
    const [data, setData] = useState()

    useEffect(() => {
        axiosInstance.get(`${url}/news/full-list`)
            .then((res) => {
                console.log(res.data);
                setData(res.data);
            })
    }, [])

    return (
        <>
            <div className="bradcam_area bradcam_bg_1">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="bradcam_text text-center">
                                <h3>Yangiliklar</h3>

                                <span style={{ color: "#fff", fontSize: "24px", fontWeight: "500" }}>
                                    Siz ushbu sahifada RedStarExpress kompaniyasining yangiliklari bilan tanishishingiz mumkin.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="service_area">
                <div className="container">
                    <div className="row">
                        {
                            data?.length && data?.map((item) => {
                                return (
                                    <div className="col-md-6 col-lg-4">
                                        <div className="single_service">
                                            <div className="thumb">
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
                                            <div className="service_info">
                                                <h3><Link to={`/news_detail/${item.id}`}>{item.title}</Link></h3>
                                                <p>{item.shortInformation}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default News