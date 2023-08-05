import React from 'react';
import userLogin from './../assets/img/userLogin.png';
import Address from './../assets/img/address.png';
import myLocation from './../assets/img/my_location_regular_icon.png';
import Banner1 from './../assets/img/UserHomeBanner.png';
import Banner2 from './../assets/img/UserHomeBanner2.png';
import { NavLink } from 'react-router-dom';
import Logo from './../assets/img/logo.png';

function Header() {
    return (
        <>
            <div className="bgImageset" id="home">
                <nav className="navbar navbar-expand-lg navbar-dark undefined" id="mainNav">
                    <div className="container position-relative">
                        <button className="navbar-toggler" type="button"><i className="fa fa-bars"></i></button>
                        <NavLink className="navbar-brand" to="/"><img src={Logo} alt="Game Hunt"
                                title="Game Hunt" /></NavLink>
                        <div className="nav-item get-in-touch loginBtnMobileBlock">
                            <span className="nav-link login-b cursor-pointer" data-bs-toggle="modal"
                                data-bs-target="#LoginModal"><img src={userLogin} alt="" /> <img
                                    src={userLogin} alt="" /> Login | Signup</span>
                        </div>
                        <div className="collapse navbar-collapse homePAgeMenu">
                            <form className="createEventForm nav-link locationFormDesk">
                                <div className="position-relative">
                                    <div className="">
                                        <input placeholder="Current Location" className="form-control CurrentLocation"
                                        name="location" value="Agra, Uttar Pradesh" /></div>
                                    <img src={Address} className="input-img loactun" alt="" /><img
                                        src={myLocation} className="input-img loactunRight"
                                        alt="" />
                                </div>
                            </form>
                            <ul className="navbar-nav py-4 py-lg-0">
                                <li className="nav-item"><NavLink className="nav-link" to="#">gamehunt academy</NavLink></li>
                                <li className="nav-item profile-drop cursor-pointer position-relative" data-bs-toggle="modal"
                                    data-bs-target="#PartnerModal"><span className="nav-link">partners</span></li>
                                <li className="nav-item get-in-touch loginBtnDstBlock">
                                    <span className="nav-link login-b cursor-pointer" data-bs-toggle="modal"
                                        data-bs-target="#LoginModal"><img src={userLogin} alt="" /> <img
                                            src={userLogin} alt="" /> Login | Signup</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <form className="createEventForm nav-link locationFormMobile">
                    <div className="position-relative">
                        <div className=""><input placeholder="Current Location"
                            className="form-control CurrentLocation pac-target-input" name="location"
                            value="Agra, Uttar Pradesh" autocomplete="off" /></div>
                        <img src={Address} className="input-img loactun" alt="" /><img
                            src={myLocation} className="input-img loactunRight" alt="" />
                    </div>
                </form>
                <div className="d-none"><i className="fa fa-question-circle-o" aria-hidden="true"></i> Help</div>
                <header>
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                                className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={Banner1} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={Banner2} className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </header>
            </div>
        </>
    )
}

export default Header