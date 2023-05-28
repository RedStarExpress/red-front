import React from 'react'
import CountUp from 'react-countup'

function CounterArea() {
    return (
        <div className="counter_area">
            <div className="container">
                <div className="offcan_bg">
                    <div className="row">
                        <div className="col-xl-3 col-md-3">
                            <div className="single_counter text-center">
                                <h3> <span className="counter">
                                    <CountUp start={0} end={42} enableScrollSpy/>
                                </span> <span>+</span> </h3>
                                <p>Mintaqaviy filiallar soni</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-3">
                            <div className="single_counter text-center">
                                <h3> <span className="counter">
                                    <CountUp start={0} end={97} enableScrollSpy/>
                                </span> <span>+</span> </h3>
                                <p>Xalqaro filiallar soni</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-3">
                            <div className="single_counter text-center">
                                <h3> <span className="counter">
                                    <CountUp start={0} end={2342} enableScrollSpy/>
                                </span></h3>
                                <p>Mamnun mijozlar</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-3">
                            <div className="single_counter text-center">
                                <h3> <span className="counter">
                                    <CountUp start={0} end={3245} enableScrollSpy/>
                                </span></h3>
                                <p>Bajarilgan ishlar (t)</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CounterArea