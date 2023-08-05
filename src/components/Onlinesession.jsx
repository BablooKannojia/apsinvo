import React from 'react'
import { NavLink } from 'react-router-dom'

function Onlinesession() {
    return (
        <>
            <section className="mt-4 pt-4">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12 mb-2 mb-md-5 text-center">
                            <h3 className="sec-title">Online Session</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12 mb-4">
                            <div className="slick-slider EventNewsSlider sportSlider slick-initialized">
                                <div className="slick-list">
                                    <div className="slick-track session">
                                        <div data-index="0" className="slick-slide slick-active slick-current session-sub" tabindex="-1"
                                            aria-hidden="false">
                                            <div>
                                                <div tabindex="-1" className='slick-session-item'>
                                                    <NavLink to="https://www.youtube.com/embed/IkNfPb3sfLQ" target="_blank"
                                                        className="text-dark">
                                                        <div className="">
                                                            <div className="eventGridFlex position-relative">
                                                                <iframe src="https://www.youtube.com/embed/IkNfPb3sfLQ"
                                                                    title="Use this three-letter word to Stop Trash-Talking to yourself! - Coach Amreen"
                                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                                                            </div>
                                                        </div>
                                                    </NavLink>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-index="1" className="slick-slide slick-active session-sub" tabindex="-1"
                                            aria-hidden="false">
                                            <div>
                                                <div tabindex="-1" className='slick-session-item'>
                                                    <NavLink to="https://www.youtube.com/embed/qXcdq826f5Q" target="_blank"
                                                        className="text-dark">
                                                        <div className="">
                                                            <div className="eventGridFlex position-relative">
                                                                <iframe src="https://www.youtube.com/embed/qXcdq826f5Q"
                                                                    title="Use this three-letter word to Stop Trash-Talking to yourself! - Coach Amreen"
                                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                                                            </div>
                                                        </div>
                                                    </NavLink>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-index="2" className="slick-slide slick-active session-sub" tabindex="-1"
                                            aria-hidden="false">
                                            <div>
                                                <div tabindex="-1" className='slick-session-item'>
                                                    <NavLink to="https://www.youtube.com/embed/jBs2RtZ1rDM" target="_blank"
                                                        className="text-dark">
                                                        <div className="">
                                                            <div className="eventGridFlex position-relative">
                                                                <iframe src="https://www.youtube.com/embed/jBs2RtZ1rDM"
                                                                    title="Use this three-letter word to Stop Trash-Talking to yourself! - Coach Amreen"
                                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                                                            </div>
                                                        </div>
                                                    </NavLink>
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

export default Onlinesession