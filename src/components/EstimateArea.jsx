import React, { useRef, useState } from 'react'
import axiosInstance from '../utils/config'

function EstimateArea() {
    const fullNameRef = useRef()
    const phoneRef = useRef()
    const emailRef = useRef()
    const messageRef = useRef()

    const [show, setShow] = useState(false)

    const sendMessage = (e) => {
        e.preventDefault();

        axiosInstance.post(`/connected/create`, {
            "fullName": fullNameRef?.current?.value,
            // "phone": phoneRef?.current?.value,
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
        <div className="Estimate_area overlay">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-5">
                        <div className="Estimate_info">
                            <h3>Maxsus taklif va murojaatlar uchun</h3>
                            <p>operatorlar xatosi, servisdagi kamchiliklar yoki bizda ko`rishni hohlagan yangiliklaringiz bo`yicha BOSH ADMIN ga murojaat qiling!</p>
                            <a href="tel:+998934552428" className="boxed-btn3">+998 93 455 24 28</a>
                        </div>
                    </div>
                    <div className="col-xl-8 col-lg-8 col-md-7">
                        <div className="form">
                            <form onSubmit={sendMessage}>
                                <div className="row">
                                    <div className="col-xl-6">
                                        <div className="input_field">
                                            <input type="text" placeholder="Sizning ismingiz"
                                                ref={fullNameRef} />
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="input_field">
                                            <input type="email" placeholder="Pochta manzilingiz"
                                                ref={emailRef} />
                                        </div>
                                    </div>

                                    <div className="col-xl-12">
                                        <div className="input_field">
                                            <textarea placeholder="Xabarni yozing"
                                                ref={messageRef}></textarea>
                                        </div>
                                    </div>
                                    <div className="col-xl-12">
                                        <div className="input_field">
                                            <button className="boxed-btn3-line" type="submit">Xabarni yuborish</button>
                                        </div>
                                    </div>
                                    <div className="col-12 my-3">
                                        {show && (
                                            <h3 style={{ textAlign: "center", color: "#fff" }}>Ma'lumotlaringiz adminga jo'natildi. Taklif va murojaatlaringiz uchun raxmat.</h3>
                                        )}
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