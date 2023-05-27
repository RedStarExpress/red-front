import React from 'react'

function Contacts() {
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
                            <form class="form-contact contact_form" action="contact_process.php" method="post" id="contactForm"
                                novalidate="novalidate">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="form-group">
                                            <textarea class="form-control w-100" name="message" id="message" cols="30" rows="9"
                                                onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Message'"
                                                placeholder="Xabar matnini kiriting"></textarea>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <input class="form-control valid" name="name" id="name" type="text"
                                                onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your name'"
                                                placeholder="Sizning ismingiz" />
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <input class="form-control valid" name="email" id="email" type="email"
                                                onfocus="this.placeholder = ''"
                                                onblur="this.placeholder = 'Enter email address'" placeholder="elektron pochta manzilingiz" />
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-group">
                                            <input class="form-control" name="subject" id="subject" type="text"
                                                onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Subject'"
                                                placeholder="telefon raqamingiz" />
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group mt-3">
                                    <button type="submit" class="button button-contactForm boxed-btn">Yuborish</button>
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