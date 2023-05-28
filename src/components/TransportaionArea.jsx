import React from 'react'

function TransportaionArea() {
    return (
        <div className="transportaion_area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="single_transport">
                            <div className="icon">
                                <img src="img/svg_icon/airplane.png" alt="" />
                            </div>
                            <h3>Yetkazish xizmatlari</h3>
                            <p>Xitoy davlatida avia, avto va temir yo`l orqali tez, xavfsiz va arzon yetkazib berish uchun</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="single_transport">
                            <div className="icon">
                                <img src="img/svg_icon/live.png" alt="" />
                            </div>
                            <h3>Jonli kuzatuv</h3>
                            <p>Yukingizning logistikasini va ayni vaqtda qayerda, kimning qo`lida ekanligini kuzatish imkoniyati</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="single_transport">
                            <div className="icon">
                                <img src="img/svg_icon/world.png" alt="" />
                            </div>
                            <h3>Xalqaro xizmatlar</h3>
                            <p>Istalgan davlatdan O`zbekistonga va O`zbekistondan istalgan davlatga yetkazib berish uchun sizga yordam beramiz</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TransportaionArea