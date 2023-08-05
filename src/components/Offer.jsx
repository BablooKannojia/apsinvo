import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

function Offer() {

    const [offer,setOffer] =useState([]);
    useEffect(() => {
    axios.get("http://13.233.104.251:8080/api/coach/homeScreen?longitude=&latitude=/offers")
    .then(res =>{
        setOffer(res.data.data.offers)})
    .catch(err => console.log(err))
  },[])
  console.warn(offer)


    return (
        <>
            <section className="pt-4" id="Offerevents">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12 mb-3 text-center">
                            <h3 className="sec-title">Offers and Sport Events</h3>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-12 mb-3 text-center">
                            <ul className="nav nav-pills mb-3 justify-content-center tabsnew lineAlign" id="pills-tab"
                                role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active text-capitalize d-grid" type="button"
                                        id="pills-offer-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-offer">offers</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link text-capitalize d-grid" type="button" id="pills-events-tab"
                                        data-bs-toggle="pill" data-bs-target="#pills-events">events</button>
                                </li>
                            </ul>
                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="pills-offer" role="tabpanel"
                                    aria-labelledby="pills-offer-tab">
                                    <div id="dynamicDots" className="position-relative">
                                        <div className="slider EventNewsSlider sportSlider d-flex align-items-center">
                                        {
                                         offer.map((currOffer) => {
                                            return(
                                            <div className='offer-box'>
                                                <div tabindex="-1" className='slick-session-item'>
                                                    <div className="">
                                                        <div className="eventGridFlex"><img src={currOffer.image}
                                                            className="img-fluid eventTabImg" alt="" /></div>
                                                    </div>
                                                </div>
                                            </div>
                                         )}
                                         )} 
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pills-events" role="tabpanel"
                                    aria-labelledby="pills-events-tab">
                                    <div id="dynamicDots" className="position-relative">
                                        <div className="slider EventNewsSlider sportSlider">
                                            <div className="">
                                                <div className="AlreadyEvent">
                                                    <div className="AlreadyEventBox">
                                                        <img src="assets/img/dummyImage.png" alt="" className="eventImg" />

                                                        <NavLink to="#" className="text-dark">
                                                            <h6 className="mb-0 nameAddressEllip">
                                                                void acadamy
                                                            </h6>
                                                            <p className="mb-0 nameAddressEllip">
                                                                Kandivali
                                                            </p>
                                                        </NavLink>
                                                        <span className="position-relative Sidetag">
                                                            <img src="assets/img/Sidetag.png" alt="" />
                                                            <span className="SidetagText">
                                                                Booked User: 11/20
                                                            </span>
                                                        </span>
                                                    </div>
                                                    <div className="eventCreateDetail">
                                                        <div className="row px-1 align-items-center">
                                                            <div
                                                                className="col-sm-12 col-md-6 col-lg-4 eventCreater vercalLIne">
                                                                <img src="assets/img/employe.png"
                                                                    className="rounded-circle eventCreaterIcon" alt="" />
                                                                <span>
                                                                    <p className="mb-0">Created by</p>
                                                                    <p className="mb-0 fw-bold">
                                                                        lav kush
                                                                    </p>
                                                                </span>
                                                            </div>
                                                            <div className="col-sm-12 col-md-6 col-lg-4 vercalLIne">
                                                                <span>
                                                                    <p className="mb-0">
                                                                        Available Sports
                                                                    </p>
                                                                    <p className="mb-0 fw-bold">
                                                                        Cricket
                                                                    </p>
                                                                </span>
                                                            </div>
                                                            <div className="col-sm-12 col-md-6 col-lg-4">
                                                                <span>
                                                                    <p className="mb-0">Date & Time</p>
                                                                    <p className="mb-0 fw-bold">
                                                                        Dec 20, 2022
                                                                    </p>
                                                                    <p className="mb-0 fw-bold">
                                                                        10:00am - 11:00pm
                                                                    </p>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="paymentJoin">
                                                        <span>
                                                            <p className="mb-0">Payment required</p>
                                                            <p className="mb-0 theme-color fw-bold">
                                                                <i className="fa fa-inr"></i> 35
                                                                /-
                                                            </p>
                                                        </span>
                                                        <button className="joinUsBtn">
                                                            Join Us
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <div class="">
                                                <div class="AlreadyEvent">
                                                    <div class="AlreadyEventBox">
                                                        <img src="assets/img/dummyImage.png" alt="" class="eventImg" />

                                                        <a href="#" class="text-dark">
                                                            <h6 class="mb-0 nameAddressEllip">
                                                                void acadamy
                                                            </h6>
                                                            <p class="mb-0 nameAddressEllip">
                                                                Kandivali
                                                            </p>
                                                        </a>
                                                        <span class="position-relative Sidetag">
                                                            <img src="assets/img/Sidetag.png" alt="" />
                                                            <span class="SidetagText">
                                                                Booked User: 11/20
                                                            </span>
                                                        </span>
                                                    </div>
                                                    <div class="eventCreateDetail">
                                                        <div class="row px-1 align-items-center">
                                                            <div
                                                                class="col-sm-12 col-md-6 col-lg-4 eventCreater vercalLIne">
                                                                <img src="assets/img/employe.png"
                                                                    class="rounded-circle eventCreaterIcon" alt="" />
                                                                <span>
                                                                    <p class="mb-0">Created by</p>
                                                                    <p class="mb-0 fw-bold">
                                                                        lav kush
                                                                    </p>
                                                                </span>
                                                            </div>
                                                            <div class="col-sm-12 col-md-6 col-lg-4 vercalLIne">
                                                                <span>
                                                                    <p class="mb-0">
                                                                        Available Sports
                                                                    </p>
                                                                    <p class="mb-0 fw-bold">
                                                                        Cricket
                                                                    </p>
                                                                </span>
                                                            </div>
                                                            <div class="col-sm-12 col-md-6 col-lg-4">
                                                                <span>
                                                                    <p class="mb-0">Date & Time</p>
                                                                    <p class="mb-0 fw-bold">
                                                                        Dec 20, 2022
                                                                    </p>
                                                                    <p class="mb-0 fw-bold">
                                                                        10:00am - 11:00pm
                                                                    </p>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="paymentJoin">
                                                        <span>
                                                            <p class="mb-0">Payment required</p>
                                                            <p class="mb-0 theme-color fw-bold">
                                                                <i class="fa fa-inr"></i> 35
                                                                /-
                                                            </p>
                                                        </span>
                                                        <button class="joinUsBtn">
                                                            Join Us
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="">
                                                <div class="AlreadyEvent">
                                                    <div class="AlreadyEventBox">
                                                        <img src="assets/img/dummyImage.png" alt="" class="eventImg" />

                                                        <a href="#" class="text-dark">
                                                            <h6 class="mb-0 nameAddressEllip">
                                                                void acadamy
                                                            </h6>
                                                            <p class="mb-0 nameAddressEllip">
                                                                Kandivali
                                                            </p>
                                                        </a>
                                                        <span class="position-relative Sidetag">
                                                            <img src="assets/img/Sidetag.png" alt="" />
                                                            <span class="SidetagText">
                                                                Booked User: 11/20
                                                            </span>
                                                        </span>
                                                    </div>
                                                    <div class="eventCreateDetail">
                                                        <div class="row px-1 align-items-center">
                                                            <div
                                                                class="col-sm-12 col-md-6 col-lg-4 eventCreater vercalLIne">
                                                                <img src="assets/img/employe.png"
                                                                    class="rounded-circle eventCreaterIcon" alt="" />
                                                                <span>
                                                                    <p class="mb-0">Created by</p>
                                                                    <p class="mb-0 fw-bold">
                                                                        lav kush
                                                                    </p>
                                                                </span>
                                                            </div>
                                                            <div class="col-sm-12 col-md-6 col-lg-4 vercalLIne">
                                                                <span>
                                                                    <p class="mb-0">
                                                                        Available Sports
                                                                    </p>
                                                                    <p class="mb-0 fw-bold">
                                                                        Cricket
                                                                    </p>
                                                                </span>
                                                            </div>
                                                            <div class="col-sm-12 col-md-6 col-lg-4">
                                                                <span>
                                                                    <p class="mb-0">Date & Time</p>
                                                                    <p class="mb-0 fw-bold">
                                                                        Dec 20, 2022
                                                                    </p>
                                                                    <p class="mb-0 fw-bold">
                                                                        10:00am - 11:00pm
                                                                    </p>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="paymentJoin">
                                                        <span>
                                                            <p class="mb-0">Payment required</p>
                                                            <p class="mb-0 theme-color fw-bold">
                                                                <i class="fa fa-inr"></i> 35
                                                                /-
                                                            </p>
                                                        </span>
                                                        <button class="joinUsBtn">
                                                            Join Us
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="">
                                                <div class="AlreadyEvent">
                                                    <div class="AlreadyEventBox">
                                                        <img src="assets/img/dummyImage.png" alt="" class="eventImg" />

                                                        <a href="#" class="text-dark">
                                                            <h6 class="mb-0 nameAddressEllip">
                                                                void acadamy
                                                            </h6>
                                                            <p class="mb-0 nameAddressEllip">
                                                                Kandivali
                                                            </p>
                                                        </a>
                                                        <span class="position-relative Sidetag">
                                                            <img src="assets/img/Sidetag.png" alt="" />
                                                            <span class="SidetagText">
                                                                Booked User: 11/20
                                                            </span>
                                                        </span>
                                                    </div>
                                                    <div class="eventCreateDetail">
                                                        <div class="row px-1 align-items-center">
                                                            <div
                                                                class="col-sm-12 col-md-6 col-lg-4 eventCreater vercalLIne">
                                                                <img src="assets/img/employe.png"
                                                                    class="rounded-circle eventCreaterIcon" alt="" />
                                                                <span>
                                                                    <p class="mb-0">Created by</p>
                                                                    <p class="mb-0 fw-bold">
                                                                        lav kush
                                                                    </p>
                                                                </span>
                                                            </div>
                                                            <div class="col-sm-12 col-md-6 col-lg-4 vercalLIne">
                                                                <span>
                                                                    <p class="mb-0">
                                                                        Available Sports
                                                                    </p>
                                                                    <p class="mb-0 fw-bold">
                                                                        Cricket
                                                                    </p>
                                                                </span>
                                                            </div>
                                                            <div class="col-sm-12 col-md-6 col-lg-4">
                                                                <span>
                                                                    <p class="mb-0">Date & Time</p>
                                                                    <p class="mb-0 fw-bold">
                                                                        Dec 20, 2022
                                                                    </p>
                                                                    <p class="mb-0 fw-bold">
                                                                        10:00am - 11:00pm
                                                                    </p>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="paymentJoin">
                                                        <span>
                                                            <p class="mb-0">Payment required</p>
                                                            <p class="mb-0 theme-color fw-bold">
                                                                <i class="fa fa-inr"></i> 35
                                                                /-
                                                            </p>
                                                        </span>
                                                        <button class="joinUsBtn">
                                                            Join Us
                                                        </button>
                                                    </div>
                                                </div>
                                            </div> */}
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

export default Offer