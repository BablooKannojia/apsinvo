import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Cricket from '../assets/img/cricket_ball_icon_red.png';
import Football from '../assets/img/Footall_red.png';
import Basketball from '../assets/img/Basketball_red.png';
import Tennis from '../assets/img/table_tennis_red.png';
import Badminton from '../assets/img/badminton_red.png';


function Training() {

    const [data,setData] =useState([]);
    useEffect(() => {
    axios.get("http://13.233.104.251:8080/api/coach/homeScreen?longitude=&latitude=")
    .then(res =>{
        //console.log("vedddd -----", res,);
        console.log("vedddd ---2222--",res.data.data.SportsData);
       // console.log("vedddd ---3333--", res.data.SportsData);
        setData(res.data.data.SportsData)})
    .catch(err => console.log(err))
  },[])
  console.log(data,'Hello')

    // const [data,setData] =useState([]);

    // const getsportData = async () =>{
    //     const response = await fetch("http://13.233.104.251:8080/api/coach/homeScreen?longitude=&latitude=");
    //     setData (await response.json());
        
    // }

    // useEffect(()=> {
    //     getsportData();
    // },[])
    

    return (
        <>
            <section className="mt-4 pt-4" id="ourprograms">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12 mb-3 text-center">
                            <h3 className="sec-title">Training by Professionals</h3>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-12 mb-3 position-relative">
                            <ul className="nav nav-pills mb-3 justify-content-start justify-content-md-center tabsnew lineAlign"
                                id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link text-capitalize d-grid" type="button"><img
                                        src={Cricket} alt=""
                                        className="sportTabImg" />cricket</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link text-capitalize d-grid" type="button"><img
                                        src={Football} alt="" className="sportTabImg" />football</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link text-capitalize d-grid" type="button"><img
                                        src={Basketball} alt="" className="sportTabImg" />basketball</button>
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
                                    <img src="assets/img/filter.png" alt="" /><span className="filterText">Filter</span>
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
                                        {
                                        data.map((currElem) => {
                                            return(
                                                <div key={currElem.id} className='venue-card'>
                                                <div className="bg-white p-2 text-capitalize programs-colles vanuesNearMeBox">
                                                        <div className="position-relative">
                                                            <NavLink className="text-dark" to="#">
                                                                <img src="https://gamehunt-data.s3.amazonaws.com/3fe6a755-8f7c-4be1-a75b-5dda9540292a.JPG"
                                                                    className="img-fluid tabImage" alt="" />
                                                            </NavLink>
                                                            <div className="venueBoxIcons">
                                                                <span className="votesRatingBg">0 <img src="assets/img/star.png" alt=""
                                                                    className="start" /></span> 0 votes
                                                            </div>
                                                            <img src="assets/img/Favoriteunselected.png" alt="" className="d-none" />
                                                        </div>
                                                        <div className="text-start mt-3">
                                                            <NavLink className="text-dark" to="#">
                                                                <h5 className="ellips1Line text-dark w-100 fw-bold"
                                                                    title="Gamehunt Football Academy">Gamehunt Football Academy</h5>
                                                                <p className="text-dark ellips1Line w-100 mb-3">{ currElem.sport }</p>
                                                            </NavLink>
                                                            <div className="eventCreater">
                                                                <img src={"http://13.233.104.251:8080/api/coach/homeScreen?longitude=&latitude=" + currElem.img}
                                                                    className="rounded-circle eventCreaterIcon" alt="" />
                                                                <span>
                                                                    <p className="mb-0 fw-bold ellips1Line w-100 text-dark">Prasad
                                                                        Bhosale</p>
                                                                </span>
                                                            </div>
                                                            <div
                                                                className="d-flex justify-content-between align-items-center gap-2 mb-2">
                                                                <span className="ellips1Line w-100 text-dark">Kandivali, Kandivali West,
                                                                    Mumbai, Maharashtra, India</span>
                                                                <NavLink to="https://www.google.com/maps/place/Kandivali, Kandivali West, Mumbai, Maharashtra, India"
                                                                    target="_blank" className="clubKMS box-shadow">
                                                                    <img src="assets/img/map_pins_icon.png" alt=""
                                                                        className="map_pins_icon" /> 1032.13Km
                                                                </NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                        }
                                    </div>
                                    <NavLink className="viewAll theme-color" to="#">View All</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Training