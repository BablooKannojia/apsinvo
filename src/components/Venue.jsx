import React from 'react'
import { NavLink } from 'react-router-dom';
import Ball from './../assets/img/cricket_ball_icon.png';
import Football from './../assets/img/Footall.png';
import Basket from './../assets/img/Basketball.png';
import Tennis from './../assets/img/table_tennis.png';
import Badminton from './../assets/img/Badmintion.png';
import Filter from './../assets/img/filter.png';


function Venue() {
    return (
        <>
            <section className="mt-4 pt-4" id="ourprograms">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12 mb-3 text-center">
                            <h3 className="sec-title">Venues near me</h3>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-12 mb-3 position-relative">
                            <ul className="nav nav-pills mb-3 justify-content-start justify-content-md-center tabsnew lineAlign"
                                id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link text-capitalize d-grid" type="button">
                                        <img
                                        src={Ball} alt=""
                                        className="sportTabImg" />cricket</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link text-capitalize d-grid" type="button"><img
                                        src={Football} alt="" className="sportTabImg" />football</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link text-capitalize d-grid" type="button"><img
                                        src={Basket}alt="" className="sportTabImg" />basketball</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link text-capitalize d-grid" type="button"><img
                                        src={Tennis} alt="" className="sportTabImg" />table
                                        Tennis</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link text-capitalize d-grid" type="button"><img
                                        src={Badminton} alt="" className="sportTabImg" />badminton</button>
                                </li>
                            </ul>
                            <div className="d-none">
                                <div className="position-relative filterDrop">
                                    <img src={Filter} alt="" /><span className="filterText">Filter</span>
                                    <div className="filterDropSelct">
                                        <span className="me-2 fw-bold">Filter By:</span>
                                        <select>
                                            <option value="">Select</option>
                                            <option value="1">My favourite</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-content" id="pills-tabContent">
                                <div id="dynamicDots" className="position-relative">
                                    <div className="slider programIMages sportSlider d-flex">
                                        <div className='venue-card'>
                                            <div className="bg-white p-2 text-capitalize programs-colles vanuesNearMeBox">
                                                <div className="position-relative">
                                                    <NavLink className="text-dark" to="#">
                                                        <img
                                                        src="https://gamehunt-data.s3.amazonaws.com/F.jpeg"
                                                        className="img-fluid tabImage" alt="" /></NavLink>
                                                    <div className="venueBoxIcons">
                                                        <span className="votesRatingBg">0 <img src="assets/img/star.png" alt=""
                                                            className="start" /></span> 0 votes
                                                    </div>
                                                    <img src="assets/img/Favoriteunselected.png" alt="" className="d-none" />
                                                </div>
                                                <div className="text-start mt-3">
                                                    <NavLink className="text-dark" to="#">
                                                        <h5 className="ellips1Line w-100 fw-bold text-dark"
                                                            title="Kaushik football Academy">Kaushik football Academy</h5>
                                                        <p className="mb-0 text-dark">football</p>
                                                    </NavLink>
                                                    <p className="mb-0 ellips1Line w-100 text-dark">Malad, Malad West, Mumbai,
                                                        Maharashtra, India</p>
                                                    <div className="d-flex justify-content-end align-items-center gap-2 mb-2">
                                                        <NavLink to="https://www.google.com/maps/place/Malad, Malad West, Mumbai, Maharashtra, India"
                                                            target="_blank" className="clubKMS box-shadow">
                                                            <img src="assets/img/map_pins_icon.png" alt=""
                                                                className="map_pins_icon" />1033.94Km
                                                        </NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='venue-card'>
                                            <div class="bg-white p-2 text-capitalize programs-colles vanuesNearMeBox">
                                                <div class="position-relative">
                                                    <a class="text-dark" href="#"><img
                                                        src="https://gamehunt-data.s3.amazonaws.com/F.jpeg"
                                                        class="img-fluid tabImage" alt="" /></a>
                                                    <div class="venueBoxIcons">
                                                        <span class="votesRatingBg">0 <img src="assets/img/star.png" alt=""
                                                            class="start" /></span> 0 votes
                                                    </div>
                                                    <img src="assets/img/Favoriteunselected.png" alt="" class="d-none" />
                                                </div>
                                                <div class="text-start mt-3">
                                                    <a class="text-dark" href="#">
                                                        <h5 class="ellips1Line w-100 fw-bold text-dark"
                                                            title="Kaushik football Academy">Kaushik football Academy</h5>
                                                        <p class="mb-0 text-dark">football</p>
                                                    </a>
                                                    <p class="mb-0 ellips1Line w-100 text-dark">Malad, Malad West, Mumbai,
                                                        Maharashtra, India</p>
                                                    <div class="d-flex justify-content-end align-items-center gap-2 mb-2">
                                                        <a href="https://www.google.com/maps/place/Malad, Malad West, Mumbai, Maharashtra, India"
                                                            target="_blank" class="clubKMS box-shadow">
                                                            <img src="assets/img/map_pins_icon.png" alt=""
                                                                class="map_pins_icon" />1033.94Km
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='venue-card'>
                                            <div class="bg-white p-2 text-capitalize programs-colles vanuesNearMeBox">
                                                <div class="position-relative">
                                                    <a class="text-dark" href="#"><img
                                                        src="https://gamehunt-data.s3.amazonaws.com/F.jpeg"
                                                        class="img-fluid tabImage" alt="" /></a>
                                                    <div class="venueBoxIcons">
                                                        <span class="votesRatingBg">0 <img src="assets/img/star.png" alt=""
                                                            class="start" /></span> 0 votes
                                                    </div>
                                                    <img src="assets/img/Favoriteunselected.png" alt="" class="d-none" />
                                                </div>
                                                <div class="text-start mt-3">
                                                    <a class="text-dark" href="#">
                                                        <h5 class="ellips1Line w-100 fw-bold text-dark"
                                                            title="Kaushik football Academy">Kaushik football Academy</h5>
                                                        <p class="mb-0 text-dark">football</p>
                                                    </a>
                                                    <p class="mb-0 ellips1Line w-100 text-dark">Malad, Malad West, Mumbai,
                                                        Maharashtra, India</p>
                                                    <div class="d-flex justify-content-end align-items-center gap-2 mb-2">
                                                        <a href="https://www.google.com/maps/place/Malad, Malad West, Mumbai, Maharashtra, India"
                                                            target="_blank" class="clubKMS box-shadow">
                                                            <img src="assets/img/map_pins_icon.png" alt=""
                                                                class="map_pins_icon" />1033.94Km
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='venue-card'>
                                            <div class="bg-white p-2 text-capitalize programs-colles vanuesNearMeBox">
                                                <div class="position-relative">
                                                    <a class="text-dark" href="#"><img
                                                        src="https://gamehunt-data.s3.amazonaws.com/F.jpeg"
                                                        class="img-fluid tabImage" alt="" /></a>
                                                    <div class="venueBoxIcons">
                                                        <span class="votesRatingBg">0 <img src="assets/img/star.png" alt=""
                                                            class="start" /></span> 0 votes
                                                    </div>
                                                    <img src="assets/img/Favoriteunselected.png" alt="" class="d-none" />
                                                </div>
                                                <div class="text-start mt-3">
                                                    <a class="text-dark" href="#">
                                                        <h5 class="ellips1Line w-100 fw-bold text-dark"
                                                            title="Kaushik football Academy">Kaushik football Academy</h5>
                                                        <p class="mb-0 text-dark">football</p>
                                                    </a>
                                                    <p class="mb-0 ellips1Line w-100 text-dark">Malad, Malad West, Mumbai,
                                                        Maharashtra, India</p>
                                                    <div class="d-flex justify-content-end align-items-center gap-2 mb-2">
                                                        <a href="https://www.google.com/maps/place/Malad, Malad West, Mumbai, Maharashtra, India"
                                                            target="_blank" class="clubKMS box-shadow">
                                                            <img src="assets/img/map_pins_icon.png" alt=""
                                                                class="map_pins_icon" />1033.94Km
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className='venue-card'>
                                            <div class="bg-white p-2 text-capitalize programs-colles vanuesNearMeBox">
                                                <div class="position-relative">
                                                    <a class="text-dark" href="#"><img
                                                        src="https://gamehunt-data.s3.amazonaws.com/F.jpeg"
                                                        class="img-fluid tabImage" alt="" /></a>
                                                    <div class="venueBoxIcons">
                                                        <span class="votesRatingBg">0 <img src="assets/img/star.png" alt=""
                                                            class="start" /></span> 0 votes
                                                    </div>
                                                    <img src="assets/img/Favoriteunselected.png" alt="" class="d-none" />
                                                </div>
                                                <div class="text-start mt-3">
                                                    <a class="text-dark" href="#">
                                                        <h5 class="ellips1Line w-100 fw-bold text-dark"
                                                            title="Kaushik football Academy">Kaushik football Academy</h5>
                                                        <p class="mb-0 text-dark">football</p>
                                                    </a>
                                                    <p class="mb-0 ellips1Line w-100 text-dark">Malad, Malad West, Mumbai,
                                                        Maharashtra, India</p>
                                                    <div class="d-flex justify-content-end align-items-center gap-2 mb-2">
                                                        <a href="https://www.google.com/maps/place/Malad, Malad West, Mumbai, Maharashtra, India"
                                                            target="_blank" class="clubKMS box-shadow">
                                                            <img src="assets/img/map_pins_icon.png" alt=""
                                                                class="map_pins_icon" />1033.94Km
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                                    <NavLink class="viewAll theme-color" to="/venues-listing">View All</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Venue