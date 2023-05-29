import React, { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom';
import axiosInstance from '../utils/config';
import samalyot from "../assets/logopolet.png"


function TrackCode() {
    const location = useLocation();
    const trackCodeRef = useRef()

    console.log(location);

    useEffect(() => {
        if (location.state) {
            axiosInstance.get(`/track/code/findByCode?code=${location.state}`)
                .then((res) => {
                    setSearchData(res.data)
                })
                .catch((err) => {
                    // Alert(setAlert, "danger", "Bunday trek kod mavjud emas");
                })
        }
    }, [location])

    const [alert, setAlert] = useState({ open: false, color: "", text: "" });

    const [searchData, setSearchData] = useState([])

    const search = (e) => {
        e.preventDefault()
        if (trackCodeRef.current?.value) {
            axiosInstance.get(`/track/code/findByCode?code=${trackCodeRef.current?.value}`)
                .then((res) => {
                    setSearchData(res.data)
                })
                .catch((err) => {
                    // Alert(setAlert, "danger", "Bunday trek kod mavjud emas");
                })
        }
    }

    return (
        <>
            <div className="bradcam_area bradcam_bg_1">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="bradcam_text text-center">
                                <h3 style={{fontWeight: "700"}}>Trek kod tekshirish</h3>

                                <span style={{ color: "#fff", fontSize: "24px", fontWeight: "500" }}>
                                    Siz ushbu sahifada RedStarExpress omboriga yuborgan buyurtmalaringizni omborda qabul qilingan yoki qabul qilinmaganligini kuzatishingiz mumkin.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className='container' style={{marginTop: "32px"}}>
                <form onSubmit={search}>
                    <div className="row track-code">
                        <div className="col-lg-9 col-md-6 col-sm-12 mb-3">
                            <input type="text" className="input" ref={trackCodeRef}
                                defaultValue={location.state}
                                placeholder="Trek kodni kiriting" required />
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
                            <button className='btn btn-primary w-100' type='submit'
                                style={{ height: "48px", background: "rgba(75, 66, 97, 1)", borderColor: "transparent" }}>Qidirish</button>
                        </div>
                    </div>
                </form>

                <ul className='mt-3 mx-0 px-0' style={{ listStyle: "none " }}>
                    {
                        searchData.length > 0 && searchData.map((item) => {
                            return (
                                <li key={Math.random()}>
                                    <hr className='pb-3' />
                                    <div className="row">
                                        <div className="col-lg-3 col-md-3 col-12">
                                            <div className="tracking-info d-flex flex-column">
                                                <h5 className="text-center">{item?.code}</h5>
                                                <div className="text-center mb-2" style={{ fontSize: "18px" }}>
                                                    Reys: {item?.partyName}
                                                </div>
                                                <div className="text-center mb-2" style={{ fontSize: "18px" }}>
                                                    {item?.createDate}
                                                </div>
                                                <div className="text-center mb-2" style={{ fontSize: "18px" }}>
                                                    {item?.country === "Chine" ? "Xitoy bazasi" : "ZedCargo bazasi"}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-9 col-md-9 col-12">
                                            <div className="dot-line"> </div>
                                            {
                                                item?.country === "Chine" ? (
                                                    <>
                                                        <div className="timeline-steps aos-init aos-animate" data-aos="fade-up">
                                                            <div className="timeline-step">
                                                                <div className="timeline-content" data-toggle="popover"
                                                                    data-trigger="hover" data-placement="top" title=""
                                                                    data-content="And here's some amazing content. It's very engaging. Right?"
                                                                    data-original-title="2003">
                                                                    <div className="inner-circle"></div>
                                                                    {/* <p className="h6 mt-3 mb-1">2003</p> */}
                                                                    <p className="h6 text-muted mb-0 mb-lg-0">Xitoy</p>
                                                                </div>
                                                            </div>
                                                            <div className="line">
                                                                <img src={samalyot} alt="" height={"36px"} />
                                                            </div>
                                                            <div className="timeline-step">
                                                                <div className="timeline-content" data-toggle="popover"
                                                                    data-trigger="hover" data-placement="top" title=""
                                                                    data-content="And here's some amazing content. It's very engaging. Right?"
                                                                    data-original-title="2005">
                                                                    <div className="inner-circle"></div>
                                                                    {/* <p className="h6 mt-3 mb-1">2005</p> */}
                                                                    <p className="h6 text-muted mb-0 mb-lg-0">ZedCargo</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h5 className='text-center'>7-14 kun ichida yetkaziladi</h5>
                                                    </>
                                                ) : (
                                                    <>
                                                        <div className="timeline-steps aos-init aos-animate" data-aos="fade-up">
                                                            <div className="timeline-step">
                                                                <div className="timeline-content" data-toggle="popover"
                                                                    data-trigger="hover" data-placement="top" title=""
                                                                    data-content="And here's some amazing content. It's very engaging. Right?"
                                                                    data-original-title="2003">
                                                                    <div className="inner-circle"></div>
                                                                    {/* <p className="h6 mt-3 mb-1">2003</p> */}
                                                                    <p className="h6 text-muted mb-0 mb-lg-0">Xitoy</p>
                                                                </div>
                                                            </div>
                                                            <div className="line2">
                                                                <img src={samalyot} alt="" height={"36px"} />
                                                            </div>
                                                            <div className="timeline-step">
                                                                <div className="timeline-content" data-toggle="popover"
                                                                    data-trigger="hover" data-placement="top" title=""
                                                                    data-content="And here's some amazing content. It's very engaging. Right?"
                                                                    data-original-title="2005">
                                                                    <div className="inner-circle"></div>
                                                                    {/* <p className="h6 mt-3 mb-1">2005</p> */}
                                                                    <p className="h6 text-muted mb-0 mb-lg-0">ZedCargo</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h5 className='text-center'>Yukingiz ZedCargo bazasiga yetib keldi</h5>
                                                    </>

                                                )
                                            }
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }

                </ul>
            </section>

            {/* alert */}
            {/* <AlertContent alert={alert} /> */}
        </>
    )
}

export default TrackCode