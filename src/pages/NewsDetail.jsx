import React, { useEffect, useState } from 'react'
import axiosInstance, { url } from '../utils/config'
import { useParams } from 'react-router-dom'
import parse from "html-react-parser"

function NewsDetail() {
    const param = useParams()
    const [data, setData] = useState({})

    useEffect(() => {
        axiosInstance.get(`/news/get-by-id/${param.id}`)
            .then((res) => {
                console.log(res.data);
                setData(res.data);
            })
    }, [param])
    return (
        <section class="blog_area single-post-area">
            <div class="container">
                <div class="row">
                    {
                        data?.title && (
                            <div class="col-lg-12 posts-list">
                                <div class="single-post">
                                    <div class="blog_details">
                                        <h2>{data?.title}</h2>
                                        <div class="feature-img">
                                            {
                                                !data?.media ? (
                                                    <>
                                                        <a href={`${url}/file/view/${data?.medias[0]}`} target="_blank" rel="noopener noreferrer">
                                                            <img src={`${url}/file/view/${data?.medias[0]}`} class="img-fluid"
                                                                width="100%" style={{maxHeight: "400px", objectFit: "cover", marginBottom: "16px"}} alt="" />
                                                        </a>
                                                    </>
                                                ) :
                                                    (
                                                        <>
                                                            <iframe width="100%" height={"400px"} style={{maxHeight: "400px", objectFit: "cover", marginBottom: "16px"}}
                                                            src={`https://www.youtube.com/embed/${data?.media?.split("=")?.[1]}`} title="bir soniya" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                                        </>
                                                    )

                                            }

                                            <img  src="img/blog/single_blog_1.png" alt="" />
                                        </div>
                                        <h3>{data?.shortInformation}</h3>
                                        {/* <p class="excert">
                                            MCSE boot camps have its supporters and its detractors. Some people do not understand why you
                                            should have to spend money on boot camp when you can get the MCSE study materials yourself at a
                                            fraction of the camp price. However, who has the willpower
                                        </p> */}
                                        <div class="quote-wrapper">
                                            <div class="quotes">
                                                {parse(data?.text)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default NewsDetail