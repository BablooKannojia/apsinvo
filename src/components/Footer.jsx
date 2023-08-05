import React from 'react'
import { NavLink } from 'react-router-dom';
import Google from './../assets/img/Googleplay.png';
import Appstore from './../assets/img/Appstore.png';
import Facebook from './../assets/img/facebook.png';
import Twitter from './../assets/img/Twitter.png';
import Instagram from './../assets/img/Instagram.png';
import Linkedin from './../assets/img/linkedin.png';

function Footer() {
    return (
        <>
            <footer className="footer position-relative">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <div className="widget">
                                <h3>Useful Links</h3>
                                <div className="row">
                                    <div className="col-sm-12 col-md-12 col-lg-12">
                                        <ul className="footer-li">
                                            <li><NavLink to="/">home</NavLink></li>
                                            <li><NavLink to="/faq">faq</NavLink></li>
                                            <li><NavLink to="/about-us">about us</NavLink></li>
                                            <li><NavLink to="/privacy-policy">privacy policy</NavLink></li>
                                            <li><NavLink to="/contact-us">contact us</NavLink></li>
                                            <li><NavLink to="/terms-conditions">terms &amp; conditions</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <div className="widget getAppFla">
                                <h3>Get Mobile App</h3>
                                <p><img src={Google} alt="" className="mt-2 me-2 appIconImg" /><img
                                    src={Appstore} alt="" className="mt-2 appIconImg" /></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-sm-12 col-md-6 col-lg-6 mb-2 text-center text-md-start fw-bold">© GameHunt 2023.
                                All rights reserved</div>
                            <div className="col-sm-12 col-md-6 col-lg-6 mb-2">
                                <div
                                    className="linkSocial d-md-flex d-grid align-items-center justify-content-center justify-content-md-end gap-2">
                                    <span>Follow Us:</span>
                                    <ul className="Social-Links">
                                        <li>
                                            <NavLink to="https://www.facebook.com/gamehuntofficial" target="_blank"><img
                                                src={Facebook} className="img-fluid" alt="" /></NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="https://twitter.com/gamehunt_india" target="_blank"><img
                                                src={Twitter} className="img-fluid" alt="" /></NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="https://www.linkedin.com/company/gamehuntofficial" target="_blank"><img
                                                src={Linkedin} className="img-fluid" alt="" /></NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="https://www.instagram.com/gamehuntofficial/" target="_blank"><img
                                                src={Instagram} className="img-fluid" alt="" /></NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;