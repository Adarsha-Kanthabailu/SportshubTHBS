import React from "react";
import soccer from './img/soccer.jpg';
import ct from './img/crikcet.jpg';
import ft from './img/football.jpg';

import b1 from './bank/axis.png';
import b2 from './bank/icici.jpg';
import b3 from './bank/kotak.jpg';
import b4 from './bank/hsbc-removebg-preview.png';
import b5 from './bank/sbi.png';

import p1 from "./productpage/1.jpg";
import p2 from "./product_img/bp2.jpg";
import p3 from "./product_img/bp3.jpg";
import p4 from "./product_img/bp4.jpg";
import p5 from "./product_img/bp5.jpg";
import p6 from "./product_img/bp6.jpg";

import p7 from "./product_img/bp7.jpg";
import p8 from "./product_img/bp8.jpg";
import p9 from "./product_img/bp9.jpg";
import p10 from "./product_img/bp10.jpg";
import p11 from "./product_img/bp11.jpg";
import p12 from "./product_img/bp12.jpg";


import pr1 from "./product_img/tc1.jpg";
import pr2 from "./product_img/tc2.jpg";
import pr3 from "./product_img/tc3.jpg";
import pr4 from "./product_img/pr2.jpg";
import pr5 from "./product_img/pr3.jpg";
import pr6 from "./product_img/pr4.jpg";

import pr7 from "./product_img/pr1.jpg";
import pr8 from "./product_img/kit.jpg";
import pr9 from "./product_img/pr1.jpg";
import pr10 from "./product_img/tc4.jpg";
import pr11 from "./product_img/tc5.jpg";
import pr12 from "./product_img/tc6.jpg";

import t1 from "./product_img/t1.jpg";
import t2 from "./product_img/t2.jpg";
import t3 from "./product_img/t3.jpg";
import t4 from "./product_img/t4.jpg";
import t5 from "./product_img/t5.jpg";
import t6 from "./product_img/t6.jpg";

import t7 from "./product_img/t7.jpg";
import t8 from "./product_img/t8.jpg";
import t9 from "./product_img/t9.jpg";
import t10 from "./product_img/t10.jpg";
import t11 from "./product_img/t11.jpg";
import t12 from "./product_img/t12.jpg";
import { Link } from "react-router-dom";

class HomePage extends React.Component{
    render(){
        return(
            <div>
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={ soccer } className="d-block w-100 h-100" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className="h51">Its not just about players, its all about teamwork.</h5>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={ ct }  className="d-block w-100 h-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className="h51">I've got the bat, do you have the balls?</h5>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={ ft } className="d-block w-100 h-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className="h51"> Football doesnt build character, it eliminates the weak ones</h5>
                        </div>
                    </div>
                    </div>
                    {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button> */}
                </div>
                <h4 className="tag">Bank Offers</h4>
                <div className="bankdetails">
                <div className="card bcard1">
                    <img src={ b1 } className="card-img-top bank"/>
                    <div className="card-body bcardbody1">
                    <h5 className="card-title bcard-title1">Axis Bank</h5>
                    <p className="card-text bcard-text1">10% Instant Discount up to INR 1000 on Axis Miles More Credit Cards Credit Card Transactions. Min purchase value INR 5000</p>
                    <a href="#" className="btn btn-primary bbtn1">Redeem</a>
                    </div>
                </div>
                <div className="card bcard1">
                    <img src={ b2 }  className="card-img-top bank" />
                    <div className="card-body bcardbody1">
                    <h5 className="card-title bcard-title1">ICICI Bank</h5>
                    <p className="card-text bcard-text1">10% Instant Discount up to INR 300 on City Union Bank Debit Card Transactions. Minimum purchase value INR 350</p>
                    <a href="#" className="btn btn-primary bbtn1">Redeem</a>
                    </div>
                </div>
                <div className="card bcard1">
                    <img src={ b3 } className="card-img-top bank" />
                    <div className="card-body bcardbody1">
                    <h5 className="card-title bcard-title1">Kotak Bank</h5>
                    <p className="card-text bcard-text1">Receive  more ASUS TUF Gaming F15, 15.6-inch (39.62 cms) FHD 144Hz Gaming Laptop offered by Appario Retail Private Ltd.</p>
                    <a href="#" className="btn btn-primary bbtn1">Redeem</a>
                    </div>
                </div>
                <div className="card bcard1">
                    <img src={ b4 } className="card-img-top bank" />
                    <div className="card-body bcardbody1">
                    <h5 className="card-title bcard-title1">HSBC Bank</h5>
                    <p className="card-text bcard-text1">Get Flat 30% off on Bitclass Full Courses for Amazon customers purchasing a laptop/tablet  discount of<br/> 6000</p>
                    <a href="#" className="btn btn-primary bbtn1">Redeem</a>
                    </div>
                </div>
                <div className="card bcard1">
                    <img src={ b5 } className="card-img-top bank" />
                    <div className="card-body bcardbody1">
                    <h5 className="card-title bcard-title1">SBI Bank</h5>
                    <p className="card-text bcard-text1">Get Flat 30% off on Bitclass Full Courses for Amazon customers purchasing a laptop/tablet discount of  <br/>6000</p>
                    <a href="#" className="btn btn-primary bbtn1">Redeem</a>
                    </div>
                </div>
                </div> 
            
                <h4 className="tag">Top Brands Product</h4>
                <h6 className="tagdes">Best Products with Brand</h6>
                <div className="scorl">
                    <div className="align1">
                        <div className="card1">
                        <Link to="/product"><img src={p1} className="card-img-top1 im1"/></Link>
                            <div className="card-body1">
                            <Link to="/product" style={{ textDecoration: 'none'}}><h6 className="card-title1 link1">B-TUF Men's Striker Cricket Shoes yello color</h6></Link>
                            <div className="d1">
                                <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#C4C1BD"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#C4C1BD"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                            </div>
                            <div className="d2">
                                <h6>&#8377;</h6>
                                <h5 className="card-title1">1299</h5>
                            </div>
                            <p className="card-text1" >January 1<br/>
                                FREE Delivery by <b>SportHub</b></p>
                            <button  className="btn1"> Add To Cart </button>
                            </div>
                        </div>
                        <div className="card1">
                            <img src={p2} className="card-img-top1 im1"/>
                            <div className="card-body1">
                            <h6 className="card-title1">Nivia Storm Football Shoe (Badminton, Running)</h6>
                            <div className="d1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#C4C1BD"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#C4C1BD"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                </div>
                                <div className="d2">
                                <h6>&#8377;</h6>
                                <h5 className="card-title1">599</h5>
                            </div>
                            <p className="card-text1" >December 30<br/>
                                FREE Delivery by <b>SportHub</b></p>
                            <button  className="btn1"> Add To Cart </button>
                            </div>
                        </div>
                        <div className="card1">
                        <img src={p3}  className="card-img-top1 im1"/>
                        <div className="card-body1">
                            <h6 className="card-title1">Hi-Tech Performance Athletic Socks (Badminton, Running)</h6>
                            <div className="d1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#C4C1BD"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#C4C1BD"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                </div>
                                <div className="d2">
                            <h6>&#8377;</h6>
                            <h5 className="card-title1">369</h5>
                            </div>
                            <p className="card-text1" >January 1<br/>
                            FREE Delivery by <b>SportHub</b></p>
                            <button  className="btn1"> Add To Cart </button>
                        </div>
                        </div>
                        <div className="card1">
                        <img src={p4} className="card-img-top1 im1"/>
                        <div className="card-body1">
                            <h6 className="card-title1">Bamboo Football Socks, Stockings for Men & Women)</h6>
                            <div className="d1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#C4C1BD"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#C4C1BD"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                </div>
                                <div className="d2">
                            <h6>&#8377;</h6>
                            <h5 className="card-title1">406</h5>
                            </div>
                            <p className="card-text1">December 29<br/>
                            FREE Delivery by <b>SportHub</b></p>
                            <button className="btn1"> Add To Cart </button>
                        </div>
                        </div>
                        <div className="card1">
                        <img src={p5}  className="card-img-top1 im1"/>
                        <div className="card-body1">
                            <h6 className="card-title1">ADIDAS Men's Football UCL Finale 20 League Ball</h6>
                            <div className="d1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#C4C1BD"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#C4C1BD"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                </div>
                                <div className="d2">
                            <h6>&#8377;</h6>
                            <h5 className="card-title1">2799</h5>
                            </div>
                            <p className="card-text1">December 31<br/>
                            FREE Delivery by <b>SportHub</b></p>
                            <button  className="btn1"> Add To Cart </button>
                        </div>
                        </div>
                        <div className="card1">
                        <img src={p6} className="card-img-top1 im1"/>
                        <div className="card-body1">
                            <h6 className="card-title1">Adidas Unisex-Adult Finale 21 Club Soccer Ball</h6>
                            <div className="d1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#C4C1BD"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#C4C1BD"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                </div>
                                <div className="d2">
                            <h6>&#8377;</h6>
                            <h5 className="card-title1">3349</h5>
                            </div>
                            <p className="card-text1">December 31<br/>
                            FREE Delivery by <b>SportHub</b></p>
                            <button  className="btn1"> Add To Cart </button>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="scorl">
                    <div className="align1">
                        <div className="card1">
                            <img src={p7}  className="card-img-top1 im1"/>
                            <div className="card-body1">
                            <h6 className="card-title1">Veer_Traders Popular Willow Cricket Bat Suitable</h6>
                            <div className="d1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#C4C1BD"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#C4C1BD"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                </div>
                                <div className="d2">
                                <h6 className="ruppe">&#8377;</h6>
                                <h5 className="card-title1">509</h5>
                            </div>
                            <p className="card-text1" >January 1<br/>
                                FREE Delivery by <b>SportHub</b></p>
                            <button className="btn1"> Add To Cart </button>
                            </div>
                        </div>
                        <div className="card1">
                            <img src={p8} className="card-img-top1 im1"/>
                            <div className="card-body1">
                            <h6 className="card-title1">Neulife Lycan Wooden Baseball bat - Heavy Duty</h6>
                            <div className="d1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#C4C1BD"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#C4C1BD"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                </div>
                                <div className="d2">
                                <h6>&#8377;</h6>
                                <h5 className="card-title1">297</h5>
                            </div>
                            <p className="card-text1" >December 30<br/>
                                FREE Delivery by <b>SportHub</b></p>
                            <button  className="btn1"> Add To Cart </button>
                            </div>
                        </div>
                        <div className="card1">
                        <img src={p9}  className="card-img-top1 im1"/>
                        <div className="card-body1">
                            <h6 className="card-title1">Lycan Hard Plastic Cricket Bat for 15+ Age Suitable</h6>
                            <div className="d1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#C4C1BD"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#C4C1BD"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                </div>
                                <div className="d2">
                            <h6>&#8377;</h6>
                            <h5 className="card-title1">379</h5>
                            </div>
                            <p className="card-text1" >January 1<br/>
                            FREE Delivery by <b>SportHub</b></p>
                            <button  className="btn1"> Add To Cart </button>
                        </div>
                        </div>
                        <div className="card1">
                        <img src={p10} className="card-img-top1 im1"/>
                        <div className="card-body1">
                            <h6 className="card-title1">HDME Club Cricket Leather Ball Pack of 6 Balls</h6>
                            <div className="d1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#C4C1BD"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#C4C1BD"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                </div>
                                <div className="d2">
                            <h6>&#8377;</h6>
                            <h5 className="card-title1">999</h5>
                            </div>
                            <p className="card-text1">December 29<br/>
                            FREE Delivery by <b>SportHub</b></p>
                            <button className="btn1"> Add To Cart </button>
                        </div>
                        </div>
                        <div className="card1">
                        <img src={p11}  className="card-img-top1 im1"/>
                        <div className="card-body1">
                            <h6 className="card-title1">Vicky Rubber Cricket Tennis Ball - Super (Heavy), Maroon</h6>
                            <div className="d1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#C4C1BD"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#C4C1BD"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                </div>
                                <div className="d2">
                            <h6>&#8377;</h6>
                            <h5 className="card-title1">495</h5>
                            </div>
                            <p className="card-text1">December 31<br/>
                            FREE Delivery by <b>SportHub</b></p>
                            <button className="btn1"> Add To Cart </button>
                        </div>
                        </div>
                        <div className="card1">
                        <img src={p12} className="card-img-top1 im1"/>
                        <div className="card-body1">
                            <h6 className="card-title1">SG Leather Cricket Ball, Adult, (Red)</h6>
                            <div className="d1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#C4C1BD"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#C4C1BD"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                </div>
                                <div className="d2">
                            <h6>&#8377;</h6>
                            <h5 className="card-title1">381</h5>
                            </div>
                            <p className="card-text1">December 31<br/>
                            FREE Delivery by <b>SportHub</b></p>
                            <button className="btn1"> Add To Cart </button>
                        </div>
                        </div>
                    </div>
                </div>

                <h4 className="tag">Top Collections</h4>
                <h6 className="tagdes">Best Products</h6>
                <div className="scorl">
                    <div className="align1">
                        <div className="card1">
                            <img src={pr1}  className="card-img-top1 im1"/>
                            <div className="card-body1">
                            <h6 className="card-title1">CHAMPIONS SPORTS Leather Super Cricket Batting Gloves</h6>
                            <div className="d1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#C4C1BD"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#C4C1BD"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                </div>
                                <div className="d2">
                                <h6>&#8377;</h6>
                                <h5 className="card-title1">399</h5>
                            </div>
                            <p className="card-text1" >January 1<br/>
                                FREE Delivery by <b>SportHub</b></p>
                            <button  className="btn1"> Add To Cart </button>
                            </div>
                        </div>
                        <div className="card1">
                            <img src={pr2} className="card-img-top1 im1" />
                            <div className="card-body1">
                            <h6 className="card-title1">Whitedot Albatross Player Cricket Batting Gloves</h6>
                            <div className="d1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#C4C1BD"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#C4C1BD"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                </div>
                                <div className="d2">
                                <h6>&#8377;</h6>
                                <h5 className="card-title1">1599</h5>
                            </div>
                            <p className="card-text1" >December 30<br/>
                                FREE Delivery by <b>SportHub</b></p>
                            <button  className="btn1"> Add To Cart </button>
                            </div>
                        </div>
                        <div className="card1">
                        <img src={pr3}  className="card-img-top1 im1" />
                        <div className="card-body1">
                            <h6 className="card-title1">Raisons Combo of Cricket Batting Gloves with Cotton</h6>
                            <div className="d1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#C4C1BD"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#C4C1BD"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                </div>
                                <div className="d2">
                            <h6>&#8377;</h6>
                            <h5 className="card-title1">299</h5>
                            </div>
                            <p className="card-text1" >January 1<br/>
                            FREE Delivery by <b>SportHub</b></p>
                            <button className="btn1"> Add To Cart </button>
                        </div>
                        </div>
                        <div className="card1">
                        <img src={pr4} className="card-img-top1 im1" />
                        <div className="card-body1">
                            <h6 className="card-title1">WHACKK Blast Red Black Senior Cricket Kit Bag (9039)</h6>
                            <div className="d1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#C4C1BD"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#C4C1BD"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                </div>
                                <div className="d2">
                            <h6>&#8377;</h6>
                            <h5 className="card-title1">1516</h5>
                            </div>
                            <p className="card-text1">December 29<br/>
                            FREE Delivery by <b>SportHub</b></p>
                            <button className="btn1"> Add To Cart </button>
                        </div>
                        </div>
                        <div className="card1">
                        <img src={pr5}  className="card-img-top1 im1" />
                        <div className="card-body1">
                            <h6 className="card-title1">MPRT Wooden Cricket Kit for Tennis Ball Combo for Age</h6>
                            <div className="d1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#C4C1BD"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#C4C1BD"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                </div>
                                <div className="d2">
                            <h6>&#8377;</h6>
                            <h5 className="card-title1">699</h5>
                            </div>
                            <p className="card-text1">December 31<br/>
                            FREE Delivery by <b>SportHub</b></p>
                            <button className="btn1"> Add To Cart </button>
                        </div>
                        </div>
                        <div className="card1">
                        <img src={pr6} className="card-img-top1 im1" />
                        <div className="card-body1">
                            <h6 className="card-title1">Sahni Sports Elite Football Training Kit, Size- Standard</h6>
                            <div className="d1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#C4C1BD"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#C4C1BD"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                </div>
                                <div className="d2">
                            <h6>&#8377;</h6>
                            <h5 className="card-title1">5349</h5>
                            </div>
                            <p className="card-text1">December 31<br/>
                            FREE Delivery by<b>SportHub</b></p>
                            <button  className="btn1"> Add To Cart </button>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="scorl">
                    <div className="align1">
                        <div className="card1">
                            <img src={pr7}  className="card-img-top1 im1" />
                            <div className="card-body1">
                            <h6 className="card-title1">Klapp Champion Cricket Kit, Cricket Set.</h6>
                            <div className="d1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#C4C1BD"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#C4C1BD"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                </div>
                                <div className="d2">
                                <h6>&#8377;</h6>
                                <h5 className="card-title1">2899</h5>
                            </div>
                            <p className="card-text1" >January 1<br/>
                                FREE Delivery by <b>SportHub</b></p>
                            <button className="btn1"> Add To Cart </button>
                            </div>
                        </div>
                        <div className="card1">
                            <img src={pr8} className="card-img-top1 im1" />
                            <div className="card-body1">
                            <h6 className="card-title1">Klapp Speed Popular Willow Cricket Kit with Three Ball</h6>
                            <div className="d1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#C4C1BD"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#C4C1BD"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                </div>
                                <div className="d2">
                                <h6>&#8377;</h6>
                                <h5 className="card-title1">599</h5>
                            </div>
                            <p className="card-text1" >December 30<br/>
                                FREE Delivery by <b>SportHub</b></p>
                            <button className="btn1"> Add To Cart </button>
                            </div>
                        </div>
                        <div className="card1">
                        <img src={pr9}  className="card-img-top1 im1" />
                        <div className="card-body1" >
                            <h6 className="card-title1">Klapp Champion Cricket Kit, Cricket Set.</h6>
                            <div className="d1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#C4C1BD"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#C4C1BD"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                </div>
                                <div className="d2">
                            <h6>&#8377;</h6>
                            <h5 className="card-title1">2899</h5>
                            </div>
                            <p className="card-text1" >January 1<br/>
                            FREE Delivery by <b>SportHub</b></p>
                            <button className="btn1"> Add To Cart </button>
                        </div>
                        </div>
                        <div className="card1">
                        <img src={pr10} className="card-img-top1 im1" />
                        <div className="card-body1">
                            <h6 className="card-title1">Steelbird Hitz Cricket Helmet for Men & Boys</h6>
                            <div className="d1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#C4C1BD"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#C4C1BD"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                </div>
                                <div className="d2">
                            <h6>&#8377;</h6>
                            <h5 className="card-title1" >1836</h5>
                            </div>
                            <p className="card-text1">December 29<br/>
                            FREE Delivery by <b>SportHub</b></p>
                            <button className="btn1"> Add To Cart </button>
                        </div>
                        </div>
                        <div className="card1">
                        <img src={pr11}  className="card-img-top1 im1" />
                        <div className="card-body1">
                            <h6 className="card-title1">DSC Avenger PRO Premium Cricket Helmet for Men</h6>
                            <div className="d1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#C4C1BD"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#C4C1BD"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                </div>
                                <div className="d2">
                            <h6>&#8377;</h6>
                            <h5 className="card-title1">2065</h5>
                            </div>
                            <p className="card-text1">December 31<br/>
                            FREE Delivery by <b>SportHub</b></p>
                            <button className="btn1"> Add To Cart </button>
                        </div>
                        </div>
                        <div className="card1">
                        <img src={pr12} className="card-img-top1 im1" />
                        <div className="card-body1">
                            <h6 className="card-title1">11D Wooden Wickets Cricket 6 Stumps with 4 Bails (Brown)</h6>
                            <div className="d1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#C4C1BD"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#C4C1BD"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                </div>
                                <div className="d2">
                            <h6>&#8377;</h6>
                            <h5 className="card-title1">549</h5>
                            </div>
                            <p className="card-text1">December 31<br/>
                            FREE Delivery by <b>SportHub</b></p>
                            <button className="btn1"> Add To Cart </button>
                        </div>
                        </div>
                    </div>
                </div>

                <h4 className="tag">Trending</h4>
                <h6 className="tagdes">No More Wait</h6>
                <div className="scorl">
                    <div className="align1">
                        <div className="card1">
                            <img src={t1}  className="card-img-top1 im1" />
                            <div className="card-body1">
                            <h6 className="card-title1">CAYA Rush Kid's Bikes | Cycle for Kids | Cycles</h6>
                            <div className="d1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#C4C1BD"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#C4C1BD"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                </div>
                                <div className="d2">
                                <h6>&#8377;</h6>
                                <h5 className="card-title1">5594</h5>
                            </div>
                            <p className="card-text1" >January 1<br/>
                                FREE Delivery by <b>SportHub</b></p>
                            <button  className="btn1"> Add To Cart </button>
                            </div>
                        </div>
                        <div className="card1">
                            <img src={t2} className="card-img-top1 im1" />
                            <div className="card-body1">
                            <h6 className="card-title1">Hero Kids Unisex Blast 20T Single Speed Bike Ideal For 7</h6>
                            <div className="d1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#C4C1BD"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#C4C1BD"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                </div>
                                <div className="d2">
                                <h6>&#8377;</h6>
                                <h5 className="card-title1">4599</h5>
                            </div>
                            <p className="card-text1" >December 30<br/>
                                FREE Delivery by <b>SportHub</b></p>
                            <button  className="btn1"> Add To Cart </button>
                            </div>
                        </div>
                        <div className="card1">
                        <img src={t3}  className="card-img-top1 im1" />
                        <div className="card-body1">
                            <h6 className="card-title1">ZOSOE Double Spring Tummy Trimmer Pro Waist Trimmer</h6>
                            <div className="d1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#C4C1BD"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#C4C1BD"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                </div>
                                <div className="d2">
                            <h6>&#8377;</h6>
                            <h5 className="card-title1">449</h5>
                            </div>
                            <p className="card-text1" >January 1<br/>
                            FREE Delivery by <b>SportHub</b></p>
                            <button className="btn1"> Add To Cart </button>
                        </div>
                        </div>
                        <div className="card1">
                        <img src={t4} className="card-img-top1 im1" />
                        <div className="card-body1">
                            <h6 className="card-title1">Kore PVC 10-30 Kg Home Gym Set with One 3 Ft Curl</h6>
                            <div className="d1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#C4C1BD"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#C4C1BD"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                </div>
                                <div className="d2">
                            <h6>&#8377;</h6>
                            <h5 className="card-title1">1399</h5>
                            </div>
                            <p className="card-text1">December 29<br/>
                            FREE Delivery by <b>SportHub</b></p>
                            <button  className="btn1"> Add To Cart </button>
                        </div>
                        </div>
                        <div className="card1">
                        <img src={t5}  className="card-img-top1 im1" />
                        <div className="card-body1">
                            <h6 className="card-title1">Kore PVC 20-50 Kg Home Gym Set with One Plain + One</h6>
                            <div className="d1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#C4C1BD"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#C4C1BD"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                </div>
                                <div className="d2">
                            <h6>&#8377;</h6>
                            <h5 className="card-title1">2070</h5>
                            </div>
                            <p className="card-text1">December 31<br/>
                            FREE Delivery by <b>SportHub</b></p>
                            <button className="btn1"> Add To Cart </button>
                        </div>
                        </div>
                        <div className="card1">
                        <img src={t6} className="card-img-top1 im1" />
                        <div className="card-body1">
                            <h6 className="card-title1">Strauss Adjustable Hand Grip Strengthener & Hand Gripper</h6>
                            <div className="d1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#C4C1BD"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#C4C1BD"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                </div>
                                <div className="d2">
                            <h6>&#8377;</h6>
                            <h5 className="card-title1">223</h5>
                            </div>
                            <p className="card-text1">December 31<br/>
                            FREE Delivery by <b>SportHub</b></p>
                            <button  className="btn1"> Add To Cart </button>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="scorl">
                    <div className="align1">
                        <div className="card1">
                            <img src={t7}  className="card-img-top1 im1" />
                            <div className="card-body1">
                            <h6 className="card-title1">Boldfit Gym Shaker Pro Cyclone Shaker 500ml with</h6>
                            <div className="d1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#C4C1BD"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#C4C1BD"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                </div>
                                <div className="d2">
                                <h6>&#8377;</h6>
                                <h5 className="card-title1">498</h5>
                            </div>
                            <p className="card-text1" >January 1<br/>
                                FREE Delivery by <b>SportHub</b></p>
                            <button  className="btn1"> Add To Cart </button>
                            </div>
                        </div>
                        <div className="card1">
                            <img src={t8} className="card-img-top1 im1" />
                            <div className="card-body1">
                            <h6 className="card-title1">MuscleXP Gym Shaker Fitness Shaker Blender 700 ml</h6>
                            <div className="d1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#C4C1BD"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#C4C1BD"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                </div>
                                <div className="d2">
                                <h6>&#8377;</h6>
                                <h5 className="card-title1" >299</h5>
                            </div>
                            <p className="card-text1" >December 30<br/>
                                FREE Delivery by <b>SportHub</b></p>
                            <button className="btn1"> Add To Cart </button>
                            </div>
                        </div>
                        <div className="card1">
                        <img src={t9} className="card-img-top1 im1" />
                        <div className="card-body1">
                            <h6 className="card-title1">Saffola FITTIFY Hi-Protein Slim Meal Replacement.</h6>
                            <div className="d1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#C4C1BD"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#C4C1BD"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                </div>
                                <div className="d2">
                            <h6>&#8377;</h6>
                            <h5 className="card-title1">1339</h5>
                            </div>
                            <p className="card-text1" >January 1<br/>
                            FREE Delivery by <b>SportHub</b></p>
                            <button className="btn1"> Add To Cart </button>
                        </div>
                        </div>
                        <div className="card1">
                        <img src={t10} className="card-img-top1 im1" />
                        <div className="card-body1">
                            <h6 className="card-title1">Foodstrong Daily Protein | Real Almond Chocolate</h6>
                            <div className="d1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#C4C1BD"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#C4C1BD"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                </div>
                                <div className="d2">
                            <h6>&#8377;</h6>
                            <h5 className="card-title1">1150</h5>
                            </div>
                            <p className="card-text1">December 29<br/>
                            FREE Delivery by <b>SportHub</b></p>
                            <button  className="btn1"> Add To Cart </button>
                        </div>
                        </div>
                        <div className="card1">
                        <img src={t11} className="card-img-top1 im1" />
                        <div className="card-body1" >
                            <h6 className="card-title1">Fast&Up 100% Whey Protein (Rich Chocolate, 30 Servings)</h6>
                            <div className="d1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#C4C1BD"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#C4C1BD"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                </div>
                                <div className="d2">
                            <h6>&#8377;</h6>
                            <h5 className="card-title1">1599</h5>
                            </div>
                            <p className="card-text1">December 31<br/>
                            FREE Delivery by <b>SportHub</b></p>
                            <button className="btn1"> Add To Cart </button>
                        </div>
                        </div>
                        <div className="card1">
                        <img src={t12} className="card-img-top1 im1" />
                        <div className="card-body1">
                            <h6 className="card-title1">Saffola FITTIFY Gourmet Hi-Protein Slim Meal</h6>
                            <div className="d1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#C4C1BD"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star"  height="24px" viewBox="0 0 24 24" width="24px" fill="#C4C1BD"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                </div>
                                <div className="d2">
                            <h6>&#8377;</h6>
                            <h5 className="card-title1">1109</h5>
                            </div>
                            <p className="card-text1">December 31<br/>
                            FREE Delivery by <b>SportHub</b></p>
                            <button className="btn1"> Add To Cart </button>
                        </div>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default HomePage;