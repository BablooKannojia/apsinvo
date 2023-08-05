import React from 'react';
import Countuser from './../assets/img/Countusers.png';
import Countvenue from './../assets/img/Countvenues.png';
import Countcoaches from './../assets/img/Countcoaches.png';

function Counter() {
    return (
        <>
            <section className="CounterBG">
                <div className="container">
                    <div className="">
                        <div className="counterGrid text-center align-items-center">
                            <div className="d-flex gap-3 align-items-center">
                                <img src={Countuser} alt="" className="" />
                                <div className="gapFlex">
                                    <h2 className="mb-0 fw-bold"><span>2500</span></h2>
                                    <h6><span className="numOfCounter">Users</span></h6>
                                </div>
                            </div>
                            <div className="d-flex gap-3 align-items-center">
                                <img src={Countvenue} alt="" className="" />
                                <div className="gapFlex">
                                    <h2 className="mb-0 fw-bold"><span>489</span></h2>
                                    <h6><span className="numOfCounter">Venues</span></h6>
                                </div>
                            </div>
                            <div className="d-flex gap-3 align-items-center">
                                <img src={Countcoaches} alt="" className="" />
                                <div className="gapFlex">
                                    <h2 className="mb-0 fw-bold"><span>412</span></h2>
                                    <h6><span className="numOfCounter">Coaches </span></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Counter;