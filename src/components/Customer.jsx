import React from 'react';
import Quete from './../assets/img/quete_red.png';
import Employee from './../assets/img/employe.png';

function Customer() {
    return (
        <>
            <section className="mt-4 pt-4">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 col-md-3 col-lg-3 mb-5">
                            <h3 className="sec-title Whatour">
                                What our customer are saying
                                <p className="quetePng">
                                <img src={Quete} className="mt-3" alt="" /></p>
                            </h3>
                        </div>
                        <div className="col-sm-12 col-md-9 col-lg-9 mb-0 mb-md-5 pe-0 quetePngMobileFlex">
                            <img src={Quete} className="img-fluid quetePngMobile" alt="" />
                            <div className="customersayingBg">
                                <div className="slick-slider CustomerSlider sportSlider slick-initialized">
                                    <div className="slick-list">
                                        <div className="slick-track customer">
                                            <div data-index="0" className="slick-slide slick-active slick-current customer-main-item" tabindex="-1"
                                                aria-hidden="false">
                                                <div>
                                                    <div tabindex="-1" className='slick-slide customer-item'>
                                                        <div className="customerSaingBox">
                                                            <div className="eventGridFlex"><img src={Employee}
                                                                className="img-fluid coachImgCenetr" alt="" /></div>
                                                            <h5 className="text-uppercase mt-1">Arpit Narvekar</h5>
                                                            <p className="mb-0 mb-md-2"><img src={Quete}
                                                                width="20px" alt="" /></p>
                                                            <p>A step in the right direction, a much needed platform with a
                                                                lot of transparency and great expertise to get our children
                                                                ready to become the next big Athletes and sports person.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-index="1" className="slick-slide slick-active customer-main-item" tabindex="-1"
                                                aria-hidden="false">
                                                <div>
                                                    <div tabindex="-1" className='slick-slide customer-item'>
                                                        <div className="customerSaingBox">
                                                            <div className="eventGridFlex"><img src={Employee}
                                                                className="img-fluid coachImgCenetr" alt="" /></div>
                                                            <h5 className="text-uppercase mt-1">Sandeep Patil</h5>
                                                            <p className="mb-0 mb-md-2"><img src={Quete}
                                                                width="20px" alt="" /></p>
                                                            <p>There was a need for such a platform that helps my child grow
                                                                physically and makes him mentally strong.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-index="2" className="slick-slide slick-active customer-main-item" tabindex="-1"
                                                aria-hidden="false">
                                                <div>
                                                    <div tabindex="-1" className='slick-slide customer-item'>
                                                        <div className="customerSaingBox">
                                                            <div className="eventGridFlex"><img src={Employee}
                                                                className="img-fluid coachImgCenetr" alt="" /></div>
                                                            <h5 className="text-uppercase mt-1">Tamrika Tyagi</h5>
                                                            <p className="mb-0 mb-md-2"><img src={Quete}
                                                                width="20px" alt="" /></p>
                                                            <p>Gamehunt Academy has taken away the worry of our child's
                                                                security when he goes for his training outside school, very
                                                                reliable and trustworthy.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Customer;