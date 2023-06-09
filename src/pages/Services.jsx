import React from 'react'
import avia from "../assets/avia.jpg"
import transport from "../assets/transport.jpg"
import ijara from "../assets/ijara.jpg"
import yuan from "../assets/yuan.jpg"
import kuzatuv from "../assets/kuzatuv.jpg"
import xalqaro from "../assets/xalqaro.jpg"

function Services() {
    return (
        <>
            <div className="bradcam_area bradcam_area2  bradcam_bg_2">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="bradcam_text text-center">
                                <h3>Bizning xizmatlar</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="service_details_area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4">
                            <div className="service_details_left">
                                <h3>Xizmatlar</h3>
                                <div className="nav nav-pills" id="v-pills-tab" role="tablist"
                                    aria-orientation="vertical">
                                    <a className=" active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home"
                                        role="tab" aria-controls="v-pills-home" aria-selected="true">Temir yo'l kargosi</a>
                                    <a className="" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile"
                                        role="tab" aria-controls="v-pills-profile" aria-selected="false">Avto kargo</a>
                                    <a className="" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages"
                                        role="tab" aria-controls="v-pills-messages" aria-selected="false">Avia kargo</a>
                                    <a className="" id="v-ijara-tab" data-toggle="pill" href="#v-ijara"
                                        role="tab" aria-controls="v-ijara" aria-selected="false">Ijaraga ombor xizmati</a>
                                    <a className="" id="v-yuan-tab" data-toggle="pill" href="#v-yuan"
                                        role="tab" aria-controls="v-yuan" aria-selected="false">Yuan sotish/sotib olish</a>
                                    <a className="" id="v-kuzatuv-tab" data-toggle="pill" href="#v-kuzatuv"
                                        role="tab" aria-controls="v-kuzatuv" aria-selected="false">Jonli kuzatuv</a>
                                    <a className="" id="v-xalqaro-tab" data-toggle="pill" href="#v-xalqaro"
                                        role="tab" aria-controls="v-xalqaro" aria-selected="false">Xalqaro xizmatlar</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-8">
                            <div className="tab-content" id="v-pills-tabContent">
                                <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel"
                                    aria-labelledby="v-pills-home-tab">
                                    <div className="service_details_info">
                                        <h3>TEMIR YO'L KARGOSI</h3>
                                        <p>Temir yo'l yuk tashish - bu inson yo'lovchilaridan farqli o'laroq, yuklarni tashish uchun temir yo'llar va poezdlardan foydalanish.

                                            Yuk poyezdi, yuk poyezdi yoki yuk poyezdi - bu temir yo‘lda bir yoki bir nechta lokomotivlar tomonidan tashiladigan, yuk jo‘natuvchi va yuk jo‘natuvchi o‘rtasidagi yo‘lning to‘liq yoki bir qismini tashuvchi yuk vagonlari (AQSh) yoki yuk vagonlari (Xalqaro temir yo‘llar ittifoqi) guruhidir. logistika zanjirining bir qismi sifatida mo'ljallangan manzil. Poezdlar quyma materiallarni, intermodal konteynerlarni, umumiy yuklarni yoki maxsus mo'ljallangan vagonlarda ixtisoslashtirilgan yuklarni tashishi mumkin.[1] Temir yo'l orqali yuk tashish amaliyoti va iqtisodiyoti mamlakat va mintaqaga qarab farq qiladi.

                                            Iste'mol qilingan energiya birligi uchun tonna-mil yoki tonna-kilometr hisoblanganda, temir yo'l transporti boshqa transport vositalariga qaraganda samaraliroq bo'lishi mumkin. Maksimal iqtisod odatda quyma tovarlar (masalan, ko'mir) bilan amalga oshiriladi, ayniqsa uzoq masofalarga tashilganda. Biroq, temir yo'l orqali jo'natish avtomobil yo'lidagi kabi moslashuvchan emas [noaniq], buning natijasida ko'p yuklar hatto uzoq masofalarga ham yuk mashinasida tashiladi. Yuklarni temir yo'l orqali tashish ko'pincha yuk tashish xarajatlarini o'z ichiga oladi, ayniqsa yuk jo'natuvchi yoki qabul qiluvchiga to'g'ridan-to'g'ri temir yo'l kirish imkoni bo'lmasa. Bu xarajatlar poyezdning o‘zini ishlatish xarajatlaridan oshib ketishi mumkin, bu omilni konteynerlashtirish, vagonda tirkama yoki harakatlanuvchi magistral kabi amaliyotlar minimallashtirishga qaratilgan.
                                        </p>

                                    </div>
                                    <div className="service_thumb">
                                        <img className="img-fluid" src={avia} alt="" style={{ width: "100%" }} />
                                    </div>
                                    <div className="accordion_area">
                                        <div className="faq_ask">
                                            <h3>Tez-Tez beriladigan savollar</h3>
                                            <div id="accordion">
                                                <div className="card">
                                                    <div className="card-header" id="headingTwo">
                                                        <h5 className="mb-0">
                                                            <button className="btn btn-link collapsed" data-toggle="collapse"
                                                                data-target="#collapseTwo" aria-expanded="false"
                                                                aria-controls="collapseTwo">
                                                                Temir yo'l kargosi orqali elektromobillar ham keltirish mumkinmi?
                                                            </button>
                                                        </h5>
                                                    </div>
                                                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo"
                                                        data-parent="#accordion">
                                                        <div className="card-body">Ha, albatta. Juda tez va ancha arzon keladi. Qo`shimcha ma`lumotlar yuzasidan telegram orqali adminga murojaat qilishingiz mumkin.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-header" id="headingOne">
                                                        <h5 className="mb-0">
                                                            <button className="btn btn-link collapsed" data-toggle="collapse"
                                                                data-target="#collapseOne" aria-expanded="false"
                                                                aria-controls="collapseOne">
                                                                Temir yo'l kargosida o`zim uchun kiyim-kechak yoki oyoq kiyimlar olib kelishim mumkinmi? <br />
                                                                (vazni juda kam bo`lgan yuklar uchun so`ralmoqda)
                                                            </button>
                                                        </h5>
                                                    </div>
                                                    <div id="collapseOne" className="collapse" aria-labelledby="headingOne"
                                                        data-parent="#accordion">
                                                        <div className="card-body">Afsuski buning iloji yo`q, lekin siz biror joyda (omborda) yuklaringizni yig`dirib butun konteyner zakaz qilishingiz mumkin!
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="download_brochure d-flex align-items-center justify-content-between">
                                        <div className="download_left d-flex align-items-center">
                                            <div className="icon">
                                                <img src="img/svg_icon/download.svg" alt="" />
                                            </div>
                                            <div className="download_text">
                                                <h3>Download Our Brochure</h3>
                                                <p>Esteem spirit temper too say adieus who direct.</p>
                                            </div>
                                        </div>
                                        <div className="download_right">
                                            <a className="boxed-btn3-line" href="/">Download Now</a>
                                        </div>
                                    </div> */}
                                </div>
                                <div className="tab-pane fade" id="v-pills-profile" role="tabpanel"
                                    aria-labelledby="v-pills-profile-tab">
                                    <div className="service_details_info">
                                        <h3>AVTO KARGO</h3>
                                        <p>Relsiz transport - temir yo'ldan foydalanmaydigan barcha quruqlikdagi transport turlarining umumiy nomi.

                                            Treksiz transport turlarining harakati uchun har qanday tekis, qattiq sirt etarli. Muntazam trafik bilan yo'llar o'z-o'zidan shakllanadi, lekin ko'p hollarda ular maxsus qurilishi va asfalt-beton qatlami yoki boshqa mos material bilan qoplangan bo'lishi kerak. Qattiq yuzasi bo'lmagan yo'llar quruq ob-havoda juda chang bo'ladi, yomg'ir paytida va ayniqsa bahor qor erishi paytida ular oqsoqlanib qoladi. Yo'lsiz transport vositalarining muhim xususiyati ularning mamlakatni kesib o'tish qobiliyati - notekis va / yoki yumshoq yerda harakatlanish qobiliyatidir. Kuzatuvli transport vositalari eng yaxshi krossovka qobiliyatiga ega - shu bilan birga ular qimmat va yuqori tezlikni rivojlantirishga qodir emas; yo'llarda harakatlanayotganda ular yo'l qoplamasini buzadi. Ba'zi izsiz transport vositalari relslar va suvda ham harakatlanishi mumkin (bir nechta muhitda harakatlanuvchilar amfibiyalar deb ataladi).
                                        </p>

                                    </div>
                                    <div className="service_thumb">
                                        <img className="img-fluid" src={transport} alt="" />
                                    </div>
                                    <div className="accordion_area">
                                        <div className="faq_ask">
                                            <h3>Tez-Tez beriladigan savollar</h3>
                                            <div id="accordion">
                                                <div className="card">
                                                    <div className="card-header" id="headingTwo1">
                                                        <h5 className="mb-0">
                                                            <button className="btn btn-link collapsed" data-toggle="collapse"
                                                                data-target="#collapseTwo1" aria-expanded="false"
                                                                aria-controls="collapseTwo">
                                                                Avto kargoga buyurtma bersilsa necha kunda O'zbekistonga keladi?
                                                            </button>
                                                        </h5>
                                                    </div>
                                                    <div id="collapseTwo1" className="collapse" aria-labelledby="headingTwo1"
                                                        data-parent="#accordion">
                                                        <div className="card-body">Avto kargoda yuklar o'rtacha 18-25 kunda keladi.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-header" id="headingOne2">
                                                        <h5 className="mb-0">
                                                            <button className="btn btn-link collapsed" data-toggle="collapse"
                                                                data-target="#collapseOne2" aria-expanded="false"
                                                                aria-controls="collapseOne">
                                                                Butun boshli fura uchun buyurtma qilsa bo`ladimi?
                                                            </button>
                                                        </h5>
                                                    </div>
                                                    <div id="collapseOne2" className="collapse" aria-labelledby="headingOne2"
                                                        data-parent="#accordion">
                                                        <div className="card-body">Ha, albatta. Xatto sizga ancha arzonga tushadi. Qo'shimcha ma'lumot uchun adminga murojaat qilishingiz mumkin.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-header" id="headingThree3">
                                                        <h5 className="mb-0">
                                                            <button className="btn btn-link collapsed" data-toggle="collapse"
                                                                data-target="#collapseThree3" aria-expanded="false"
                                                                aria-controls="collapseThree">
                                                                Avto kargoda barcha mahsulotlarni olib kelish mumkinmi?
                                                            </button>
                                                        </h5>
                                                    </div>
                                                    <div id="collapseThree3" className="collapse" aria-labelledby="headingThree3"
                                                        data-parent="#accordion">
                                                        <div className="card-body">Mumkin, barcha turdagi mahsulotlarni eng tez va xavfsiz keltirishga kafolat beriladi. (Faqat davlat tomonidan taqiqlangan buyumlar, kontrabanda mahsulotlari mumkin emas!)
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="download_brochure d-flex align-items-center justify-content-between">
                                        <div className="download_left d-flex align-items-center">
                                            <div className="icon">
                                                <img src="img/svg_icon/download.svg" alt="" />
                                            </div>
                                            <div className="download_text">
                                                <h3>Download Our Brochure</h3>
                                                <p>Esteem spirit temper too say adieus who direct.</p>
                                            </div>
                                        </div>
                                        <div className="download_right">
                                            <a className="boxed-btn3-line" href="/">Download Now</a>
                                        </div>
                                    </div> */}
                                </div>
                                <div className="tab-pane fade" id="v-pills-messages" role="tabpanel"
                                    aria-labelledby="v-pills-messages-tab">
                                    <div className="service_details_info">
                                        <h3>AVIA KARGO</h3>
                                        <p>Tasniflash
                                            Havo transporti odatda yo'nalish, yuk toifasi va yuklash turi bo'yicha tasniflanadi.

                                            Oddiy transport
                                            Shuningdek, "umumiy tashish" deb ham ataladi - ular umumiy yuklarni belgilangan joyga tashishni o'z ichiga oladi va ushbu xizmatning mijozi tashilgan tovarlarning egasi hisoblanadi. Umumiy tashishning asosiy afzalligi yuqori samaradorlikdir.

                                            O'tish transporti
                                            Asosiy maqola: O'tish transporti
                                            O'tish transporti - kerakli yo'nalish bo'yicha bepul transportdan foydalanish. Ushbu yuk tashish formatining afzalligi past narx hisoblanadi.Shuttle transporti
                                            Asosiy maqola: Shuttle xizmati
                                            Aviatsiyada bu format yo'lovchilarni tashish uchun qabul qilingan. Shuttle transportining o'ziga xos xususiyati - bortda yo'lovchilarsiz transport vositasining jo'nash joyiga qaytishi.

                                            Konsolidatsiyalangan transport
                                            Asosiy maqola: Konsolidatsiyalangan transport
                                            Konsolidatsiyalangan jo'natmalar bo'lak yuklarni tashishning eng keng tarqalgan shakli bo'lib, unda turli jo'natuvchilarning tovarlari omborga jamlanadi va ular optimal hajmda to'plangan holda jo'natiladi. Transportning arzonligi bilan farqlanadi.
                                            Havo yuki
                                            Shuningdek qarang: yuk samolyoti

                                            Ushbu bo'lim tugallanmagan.
                                            Siz loyihaga tuzatish va to'ldirish orqali yordam berasiz.
                                            Havoda yuk tashish qoidalari
                                            Havoda yuk tashishni amalga oshirish qoidalariga muvofiq ("Ekspeditsiya faoliyati to'g'risida" gi Federal qonun 2003 yil 30 iyundagi 87-FZ-son va Xalqaro havo tashish to'g'risidagi Varshava konventsiyasi (Varshava, 1929 yil)) yuklarni tashish uchun qabul qilish amalga oshiriladi. faqat to'g'ri rasmiylashtirilgan konnosament mavjud bo'lganda chiqariladi.
                                            Xalqaro aviakompaniyalarda yuklarni tashish yo'lovchi va yuk samolyotlarida amalga oshirilishi mumkin.
                                            Og'irligi va o'lchamlari bo'yicha belgilangan chegaralardan oshib ketgan yuk faqat tashuvchining roziligi bilan tashishga qabul qilinishi mumkin.
                                            Xalqaro tashish uchun qabul qilinadigan tovarlar quyidagi qoidalarga bo'ysunadi:
                                            yuklarni olib kirish va olib chiqish, tranzit yuklarni tashish amalga oshirilayotgan hududga, hududidan yoki hududi orqali mamlakat qonunlari va qoidalari bilan ruxsat etilgan bo'lishi kerak;
                                            yukning o'lchamlari uning erkin ortish va tushirishni, havo kemalarining bagaj va yuk bo'limlariga joylashtirilishini va mahkamlanishini ta'minlashi kerak;
                                            muntazam yoʻlovchi havo kemalarida tashishda yukning ogʻirligi va oʻlchamlari normativ hujjatlarda belgilangan chegaralardan oshmasligi kerak;
                                            barcha kerakli hujjatlar yukga ilova qilinishi kerak;
                                            yuk havo kemasi, undagi odamlar va mol-mulk uchun xavf tug‘dirmasligi, shuningdek, o‘z xususiyatlariga ko‘ra yo‘lovchilarga noqulaylik tug‘dirmasligi kerak.
                                        </p>

                                    </div>
                                    <div className="service_thumb">
                                        <img className="img-fluid" src={avia} alt="" />
                                    </div>
                                    <div className="accordion_area">
                                        <div className="faq_ask">
                                            <h3>Tez-Tez beriladigan savollar</h3>
                                            <div id="accordion">
                                                <div className="card">
                                                    <div className="card-header" id="headingTwoa">
                                                        <h5 className="mb-0">
                                                            <button className="btn btn-link collapsed" data-toggle="collapse"
                                                                data-target="#collapseTwoa" aria-expanded="false"
                                                                aria-controls="collapseTwo">
                                                                Avia kargo yetkazib berish muddati necha kun?
                                                            </button>
                                                        </h5>
                                                    </div>
                                                    <div id="collapseTwoa" className="collapse" aria-labelledby="headingTwoa"
                                                        data-parent="#accordion">
                                                        <div className="card-body">Bizning xitoydagi omborimizga borgan kundan boshlab 7-14 kunda yetkazib beriladi
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-header" id="headingOne">
                                                        <h5 className="mb-0">
                                                            <button className="btn btn-link collapsed" data-toggle="collapse"
                                                                data-target="#collapseOneb" aria-expanded="false"
                                                                aria-controls="collapseOneb">
                                                                Avia kargoda ishlamoqchiman qanday kod olsam bo'ladi?
                                                            </button>
                                                        </h5>
                                                    </div>
                                                    <div id="collapseOneb" className="collapse" aria-labelledby="headingOneb"
                                                        data-parent="#accordion">
                                                        <div className="card-body">ID kod olish uchun telegram botdan ro'yhatdan o'tish kerak. Botni admindan so'rashingiz mumkin.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-header" id="headingThree">
                                                        <h5 className="mb-0">
                                                            <button className="btn btn-link collapsed" data-toggle="collapse"
                                                                data-target="#collapseThreev" aria-expanded="false"
                                                                aria-controls="collapseThree">
                                                                Qanday mahsulotlar mumkin emas?
                                                            </button>
                                                        </h5>
                                                    </div>
                                                    <div id="collapseThreev" className="collapse" aria-labelledby="headingThreev"
                                                        data-parent="#accordion">
                                                        <div className="card-body"> Telegram orqali RedStarExpress kanaliga obuna bo'lsangiz mumkin bo'lmagan yuklar va nima uchun mumkin emasligining sabablari ko'rsatilgan.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="download_brochure d-flex align-items-center justify-content-between">
                                        <div className="download_left d-flex align-items-center">
                                            <div className="icon">
                                                <img src="img/svg_icon/download.svg" alt="" />
                                            </div>
                                            <div className="download_text">
                                                <h3>Download Our Brochure</h3>
                                                <p>Esteem spirit temper too say adieus who direct.</p>
                                            </div>
                                        </div>
                                        <div className="download_right">
                                            <a className="boxed-btn3-line" href="/">Download Now</a>
                                        </div>
                                    </div> */}
                                </div>
                                <div className="tab-pane fade" id="v-ijara" role="tabpanel"
                                    aria-labelledby="v-ijara-tab">
                                    <div className="service_details_info">
                                        <h3>Ijaraga ombor xizmati: Ombor, ombor binolari:</h3>
                                        <p>
                                            oziq-ovqat, asbob-anjom, xom ashyo, mahsulotlar, uskunalar, har xil materiallar saklanadigan joy. Omborlarning usti ochiq, yarim yopiq (bostirma), koʻp oralikli, kup qavatli, isitiladigan, isitilmaydigan turlari mavjud. Omborlar tosh, shagʻal, sement, gʻisht, yogʻoch va boshqa materiallardan quriladi. RedStarExpress esa sizga xitoy davlatida yuklaringizni yig'ish, yuklarni qadoqlash va shu kabi ombor xizmatlarini taklif qiladi. Agar sizni ushbu xizmat qiziqtirsa adminga murojaat qilishingiz mumkin.
                                        </p>

                                    </div>
                                    <div className="service_thumb">
                                        <img className="img-fluid" src={ijara} alt="" />
                                    </div>
                                    <div className="accordion_area">
                                        <div className="faq_ask">
                                            <h3>Tez-Tez beriladigan savollar</h3>
                                            <div id="accordion">
                                                <div className="card">
                                                    <div className="card-header" id="headingTwoa">
                                                        <h5 className="mb-0">
                                                            <button className="btn btn-link collapsed" data-toggle="collapse"
                                                                data-target="#collapseTwoa" aria-expanded="false"
                                                                aria-controls="collapseTwo">
                                                                Avia kargo yetkazib berish muddati necha kun?
                                                            </button>
                                                        </h5>
                                                    </div>
                                                    <div id="collapseTwoa" className="collapse" aria-labelledby="headingTwoa"
                                                        data-parent="#accordion">
                                                        <div className="card-body">Bizning xitoydagi omborimizga borgan kundan boshlab 7-14 kunda yetkazib beriladi
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-header" id="headingOne">
                                                        <h5 className="mb-0">
                                                            <button className="btn btn-link collapsed" data-toggle="collapse"
                                                                data-target="#collapseOneb" aria-expanded="false"
                                                                aria-controls="collapseOneb">
                                                                Avia kargoda ishlamoqchiman qanday kod olsam bo'ladi?
                                                            </button>
                                                        </h5>
                                                    </div>
                                                    <div id="collapseOneb" className="collapse" aria-labelledby="headingOneb"
                                                        data-parent="#accordion">
                                                        <div className="card-body">ID kod olish uchun telegram botdan ro'yhatdan o'tish kerak. Botni admindan so'rashingiz mumkin.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-header" id="headingThree">
                                                        <h5 className="mb-0">
                                                            <button className="btn btn-link collapsed" data-toggle="collapse"
                                                                data-target="#collapseThreev" aria-expanded="false"
                                                                aria-controls="collapseThree">
                                                                Qanday mahsulotlar mumkin emas?
                                                            </button>
                                                        </h5>
                                                    </div>
                                                    <div id="collapseThreev" className="collapse" aria-labelledby="headingThreev"
                                                        data-parent="#accordion">
                                                        <div className="card-body"> Telegram orqali RedStarExpress kanaliga obuna bo'lsangiz mumkin bo'lmagan yuklar va nima uchun mumkin emasligining sabablari ko'rsatilgan.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="download_brochure d-flex align-items-center justify-content-between">
                                        <div className="download_left d-flex align-items-center">
                                            <div className="icon">
                                                <img src="img/svg_icon/download.svg" alt="" />
                                            </div>
                                            <div className="download_text">
                                                <h3>Download Our Brochure</h3>
                                                <p>Esteem spirit temper too say adieus who direct.</p>
                                            </div>
                                        </div>
                                        <div className="download_right">
                                            <a className="boxed-btn3-line" href="/">Download Now</a>
                                        </div>
                                    </div> */}
                                </div>
                                <div className="tab-pane fade" id="v-yuan" role="tabpanel"
                                    aria-labelledby="v-yuan-tab">
                                    <div className="service_details_info">
                                        <h3>Yuan sotish/sotib olish:</h3>
                                        <p>
                                            Yuan — Xitoy Xalq Respublikasining pul birligi. 1 Yu. =10 szyao=100 finyam. Xalqaro ifodasi OGU. Yu. 1835-yildan kumush tangalar koʻrinishida zarb qilina boshlagan. 1933-yil mart oyiga qadar Xitoyda lyan (14—19-asrlarda muomalada boʻlgan kumush valyuta) pul birligi sifatida ishlatilgan. Ayni vaqtda Xitoy bilan ishlaydigan yurtdoshlarimiz ko'p va to'g'ridan-to'g'ri zavodlar bilan oldi-berdi qilinganda yuanda pul to'lanishi kerak. Shunday muammolarni hal qilish uchun biz telegramda @RedStarExpressBot yaratdik va ushbu telegram botda 24 soat davomida istalgan summani konvertatsiya qilishingiz mumkin.
                                        </p>

                                    </div>
                                    <div className="service_thumb">
                                        <img className="img-fluid" src={yuan} alt="" />
                                    </div>
                                    <div className="accordion_area">
                                        <div className="faq_ask">
                                            <h3>Tez-Tez beriladigan savollar</h3>
                                            <div id="accordion">
                                                <div className="card">
                                                    <div className="card-header" id="headingTwoa">
                                                        <h5 className="mb-0">
                                                            <button className="btn btn-link collapsed" data-toggle="collapse"
                                                                data-target="#collapseTwoa" aria-expanded="false"
                                                                aria-controls="collapseTwo">
                                                                Avia kargo yetkazib berish muddati necha kun?
                                                            </button>
                                                        </h5>
                                                    </div>
                                                    <div id="collapseTwoa" className="collapse" aria-labelledby="headingTwoa"
                                                        data-parent="#accordion">
                                                        <div className="card-body">Bizning xitoydagi omborimizga borgan kundan boshlab 7-14 kunda yetkazib beriladi
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-header" id="headingOne">
                                                        <h5 className="mb-0">
                                                            <button className="btn btn-link collapsed" data-toggle="collapse"
                                                                data-target="#collapseOneb" aria-expanded="false"
                                                                aria-controls="collapseOneb">
                                                                Avia kargoda ishlamoqchiman qanday kod olsam bo'ladi?
                                                            </button>
                                                        </h5>
                                                    </div>
                                                    <div id="collapseOneb" className="collapse" aria-labelledby="headingOneb"
                                                        data-parent="#accordion">
                                                        <div className="card-body">ID kod olish uchun telegram botdan ro'yhatdan o'tish kerak. Botni admindan so'rashingiz mumkin.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-header" id="headingThree">
                                                        <h5 className="mb-0">
                                                            <button className="btn btn-link collapsed" data-toggle="collapse"
                                                                data-target="#collapseThreev" aria-expanded="false"
                                                                aria-controls="collapseThree">
                                                                Qanday mahsulotlar mumkin emas?
                                                            </button>
                                                        </h5>
                                                    </div>
                                                    <div id="collapseThreev" className="collapse" aria-labelledby="headingThreev"
                                                        data-parent="#accordion">
                                                        <div className="card-body"> Telegram orqali RedStarExpress kanaliga obuna bo'lsangiz mumkin bo'lmagan yuklar va nima uchun mumkin emasligining sabablari ko'rsatilgan.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="download_brochure d-flex align-items-center justify-content-between">
                                        <div className="download_left d-flex align-items-center">
                                            <div className="icon">
                                                <img src="img/svg_icon/download.svg" alt="" />
                                            </div>
                                            <div className="download_text">
                                                <h3>Download Our Brochure</h3>
                                                <p>Esteem spirit temper too say adieus who direct.</p>
                                            </div>
                                        </div>
                                        <div className="download_right">
                                            <a className="boxed-btn3-line" href="/">Download Now</a>
                                        </div>
                                    </div> */}
                                </div>
                                <div className="tab-pane fade" id="v-kuzatuv" role="tabpanel"
                                    aria-labelledby="v-kuzatuv-tab">
                                    <div className="service_details_info">
                                        <h3>Jonli kuzatuv: </h3>
                                        <p>
                                            Ushbu xizmat tez orada ishga tushadi va bu xizmat orqali siz yukingizni Xitoydan boshlab O'zbekistonga qadar bo'lgan davrda ayni vaqtda qayerdaligini bilishingiz, ya'ni logistikasini to'liq kuzatishingiz mumkin bo'ladi. Buning uchun biz bir nechta kompaniyalar bilan shartnomalar amalga oshiramiz!
                                        </p>

                                    </div>
                                    <div className="service_thumb">
                                        <img className="img-fluid" src={kuzatuv} alt="" />
                                    </div>
                                    <div className="accordion_area">
                                        <div className="faq_ask">
                                            <h3>Tez-Tez beriladigan savollar</h3>
                                            <div id="accordion">
                                                <div className="card">
                                                    <div className="card-header" id="headingTwoa">
                                                        <h5 className="mb-0">
                                                            <button className="btn btn-link collapsed" data-toggle="collapse"
                                                                data-target="#collapseTwoa" aria-expanded="false"
                                                                aria-controls="collapseTwo">
                                                                Avia kargo yetkazib berish muddati necha kun?
                                                            </button>
                                                        </h5>
                                                    </div>
                                                    <div id="collapseTwoa" className="collapse" aria-labelledby="headingTwoa"
                                                        data-parent="#accordion">
                                                        <div className="card-body">Bizning xitoydagi omborimizga borgan kundan boshlab 7-14 kunda yetkazib beriladi
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-header" id="headingOne">
                                                        <h5 className="mb-0">
                                                            <button className="btn btn-link collapsed" data-toggle="collapse"
                                                                data-target="#collapseOneb" aria-expanded="false"
                                                                aria-controls="collapseOneb">
                                                                Avia kargoda ishlamoqchiman qanday kod olsam bo'ladi?
                                                            </button>
                                                        </h5>
                                                    </div>
                                                    <div id="collapseOneb" className="collapse" aria-labelledby="headingOneb"
                                                        data-parent="#accordion">
                                                        <div className="card-body">ID kod olish uchun telegram botdan ro'yhatdan o'tish kerak. Botni admindan so'rashingiz mumkin.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-header" id="headingThree">
                                                        <h5 className="mb-0">
                                                            <button className="btn btn-link collapsed" data-toggle="collapse"
                                                                data-target="#collapseThreev" aria-expanded="false"
                                                                aria-controls="collapseThree">
                                                                Qanday mahsulotlar mumkin emas?
                                                            </button>
                                                        </h5>
                                                    </div>
                                                    <div id="collapseThreev" className="collapse" aria-labelledby="headingThreev"
                                                        data-parent="#accordion">
                                                        <div className="card-body"> Telegram orqali RedStarExpress kanaliga obuna bo'lsangiz mumkin bo'lmagan yuklar va nima uchun mumkin emasligining sabablari ko'rsatilgan.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="download_brochure d-flex align-items-center justify-content-between">
                                        <div className="download_left d-flex align-items-center">
                                            <div className="icon">
                                                <img src="img/svg_icon/download.svg" alt="" />
                                            </div>
                                            <div className="download_text">
                                                <h3>Download Our Brochure</h3>
                                                <p>Esteem spirit temper too say adieus who direct.</p>
                                            </div>
                                        </div>
                                        <div className="download_right">
                                            <a className="boxed-btn3-line" href="/">Download Now</a>
                                        </div>
                                    </div> */}
                                </div>
                                <div className="tab-pane fade" id="v-xalqaro" role="tabpanel"
                                    aria-labelledby="v-xalqaro-tab">
                                    <div className="service_details_info">
                                        <h3>Xalqaro xizmatlar: </h3>
                                        <p>
                                            RED STAR EXPRESS dunyoning istalgan davlatidan yuklarni olib kelishda va istalgan davlatga yuk yuborishda sizga to'liq yordam beradi. Xitoydan boshqa davlatlar uchun maxsus kelishuv asosida admin bilan gaplashishingiz kerak!
                                        </p>

                                    </div>
                                    <div className="service_thumb">
                                        <img className="img-fluid" src={xalqaro} alt="" />
                                    </div>
                                    <div className="accordion_area">
                                        <div className="faq_ask">
                                            <h3>Tez-Tez beriladigan savollar</h3>
                                            <div id="accordion">
                                                <div className="card">
                                                    <div className="card-header" id="headingTwoa">
                                                        <h5 className="mb-0">
                                                            <button className="btn btn-link collapsed" data-toggle="collapse"
                                                                data-target="#collapseTwoa" aria-expanded="false"
                                                                aria-controls="collapseTwo">
                                                                Avia kargo yetkazib berish muddati necha kun?
                                                            </button>
                                                        </h5>
                                                    </div>
                                                    <div id="collapseTwoa" className="collapse" aria-labelledby="headingTwoa"
                                                        data-parent="#accordion">
                                                        <div className="card-body">Bizning xitoydagi omborimizga borgan kundan boshlab 7-14 kunda yetkazib beriladi
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-header" id="headingOne">
                                                        <h5 className="mb-0">
                                                            <button className="btn btn-link collapsed" data-toggle="collapse"
                                                                data-target="#collapseOneb" aria-expanded="false"
                                                                aria-controls="collapseOneb">
                                                                Avia kargoda ishlamoqchiman qanday kod olsam bo'ladi?
                                                            </button>
                                                        </h5>
                                                    </div>
                                                    <div id="collapseOneb" className="collapse" aria-labelledby="headingOneb"
                                                        data-parent="#accordion">
                                                        <div className="card-body">ID kod olish uchun telegram botdan ro'yhatdan o'tish kerak. Botni admindan so'rashingiz mumkin.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-header" id="headingThree">
                                                        <h5 className="mb-0">
                                                            <button className="btn btn-link collapsed" data-toggle="collapse"
                                                                data-target="#collapseThreev" aria-expanded="false"
                                                                aria-controls="collapseThree">
                                                                Qanday mahsulotlar mumkin emas?
                                                            </button>
                                                        </h5>
                                                    </div>
                                                    <div id="collapseThreev" className="collapse" aria-labelledby="headingThreev"
                                                        data-parent="#accordion">
                                                        <div className="card-body"> Telegram orqali RedStarExpress kanaliga obuna bo'lsangiz mumkin bo'lmagan yuklar va nima uchun mumkin emasligining sabablari ko'rsatilgan.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="download_brochure d-flex align-items-center justify-content-between">
                                        <div className="download_left d-flex align-items-center">
                                            <div className="icon">
                                                <img src="img/svg_icon/download.svg" alt="" />
                                            </div>
                                            <div className="download_text">
                                                <h3>Download Our Brochure</h3>
                                                <p>Esteem spirit temper too say adieus who direct.</p>
                                            </div>
                                        </div>
                                        <div className="download_right">
                                            <a className="boxed-btn3-line" href="/">Download Now</a>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services