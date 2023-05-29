import React, { useRef, useState } from 'react'
import axiosInstance from '../utils/config'

function Contacts() {
    const fullNameRef = useRef()
    const phoneRef = useRef()
    const emailRef = useRef()
    const messageRef = useRef()

    const [show, setShow] = useState(false)

    const sendMessage = (e) => {
        e.preventDefault();

        axiosInstance.post(`/connected/create`, {
            "fullName": fullNameRef?.current?.value,
            "phone": phoneRef?.current?.value,
            "email": emailRef?.current?.value,
            "message": messageRef?.current?.value,
            "comeWhere": "Sayt orqali"
        }).then((res) => {
            setShow(true)
            console.log(res.data);
            setTimeout(() => {
                e.target.reset();
                setShow(false)
            }, [3000])
        })
    }
    return (
        <>
            <div class="bradcam_area bradcam_bg_1">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="bradcam_text text-center">
                                <h3>Bog'lanish</h3>

                                <span style={{ color: "#fff", fontSize: "24px", fontWeight: "500" }}>
                                    Taklif va murojaatlar, qo`shimcha savollar uchun murojaat qilishingiz mumkin!
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section class="contact-section">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <h2 class="contact-title">Ma'lumotlarni to'ldiring</h2>
                        </div>
                        <div class="col-lg-8">
                            <form class="form-contact contact_form" id="contactForm" onSubmit={sendMessage}
                                novalidate="novalidate">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="form-group">
                                            <textarea class="form-control w-100" name="message" id="message" cols="30" rows="9"
                                                onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Message'"
                                                placeholder="Xabar matnini kiriting" ref={messageRef}></textarea>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <input class="form-control valid" name="name" id="name" type="text"
                                                onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your name'"
                                                placeholder="Sizning ismingiz" ref={fullNameRef} />
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <input class="form-control valid" name="email" id="email" type="email"
                                                onfocus="this.placeholder = ''" ref={emailRef}
                                                onblur="this.placeholder = 'Enter email address'" placeholder="elektron pochta manzilingiz" />
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-group">
                                            <input class="form-control" name="subject" id="subject" type="text"
                                                onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Subject'"
                                                placeholder="telefon raqamingiz" ref={phoneRef} />
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-group w-100 mx-0 px-0">
                                            <button type="submit" class="w-100 button button-contactForm boxed-btn mx-0">Yuborish</button>
                                        </div>
                                    </div>

                                    <div class="col-12 mb-3">
                                        {!show && (
                                            <h3 style={{ textAlign: "center" }}>Ma'lumotlaringiz adminga jo'natildi. Taklif va murojaatlaringiz uchun raxmat.</h3>
                                        )}
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="col-lg-3 offset-lg-1">
                            <div class="media contact-info">
                                <span class="contact-info__icon"><i class="ti-home"></i></span>
                                <div class="media-body">
                                    <h3>Buttonwood, California.</h3>
                                    <p>Rosemead, CA 91770</p>
                                </div>
                            </div>
                            <div class="media contact-info">
                                <span class="contact-info__icon"><i class="ti-tablet"></i></span>
                                <div class="media-body">
                                    <h3>+1 253 565 2365</h3>
                                    <p>Mon to Fri 9am to 6pm</p>
                                </div>
                            </div>
                            <div class="media contact-info">
                                <span class="contact-info__icon"><i class="ti-email"></i></span>
                                <div class="media-body">
                                    <h3>support@colorlib.com</h3>
                                    <p>Send us your query anytime!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contacts