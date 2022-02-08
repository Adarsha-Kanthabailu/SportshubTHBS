import React from "react";
import p1 from './productpage/1.jpg';
import p2 from './productpage/2.jpg';
import p3 from './productpage/3.jpg';
import p4 from './productpage/4.jpg';


import cod from './svgimg/cash_on_delivery.png';
import rp from './svgimg/return_policy.png';
import shd from './svgimg/Sportyhub_delivered.png';
import ncd from './svgimg/no_contcat_delivery.png';



import p11 from './productpage/p1.jpg';
import p22 from './productpage/p3.jpg';
import p33 from './productpage/p2.jpg';
import p44 from './productpage/p4.jpg';
import p55 from './productpage/p5.jpg';
import p66 from './productpage/p6.jpg';
import p77 from './productpage/p7.jpg';

class ProductPage extends React.Component{
    render(){
        return(
            <div>
                 <section id="screen1">
                    <div id="fix">
                        <div id="a11">
                            <h3 id="b11"><b>B-TUF Men's Striker Cricket Shoes</b></h3>
                        </div>
                        <div id="c11">
                            <div id="d11">
                                <h6 id="e11">Price: &nbsp;</h6>
                                <h5 className="card-title1" id="ex1">&#8377;1299</h5>
                            </div>
                            <h6 className="free_del" style={{marginTop:15}}>Inclusive of all taxes</h6>
                            <h6 className="free_del">FREE delivery: <b style={{color: "black"}}>Tuesday, Dec 28</b></h6>
                        </div>
                        <div id="f11">
                        <button className="addtocart">Add to Cart</button>
                        <button className="buynow">Buy Now</button>
                        </div>
                    </div>
                </section>
                 <section id="screen2">
                    <div style={{width: 500}}>
                    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img className="d-block w-100" style={{height:300}} src={p1}/>
                            </div>
                            <div class="carousel-item">
                                <img className="d-block w-100" style={{height:300}} src={p2}/>
                            </div>
                            <div class="carousel-item">
                                <img className="d-block w-100" style={{height:300}} src={p3}/>
                            </div>
                            <div class="carousel-item">
                                <img className="d-block w-100" style={{height:300}} src={p4}/>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                        </div>
                    </div>
                    <div style={{width: "50%", height: 500, marginLeft: 100}}>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <div style={{display: "flex", flexDirection: "row"}}>
                            <img className="svgicon" src={cod}/>
                            <img className="svgicon" src={rp}/>
                            <img className="svgicon" src={shd}/>
                            <img className="svgicon" src={ncd}/>
                        </div>
                        <div style={{display: "flex", flexDirection: "row"}}>
                        <p className="svgtext">Cash On <br/> Delivery</p>
                        <p className="svgtext">Return <br/> Policy</p>
                        <p className="svgtext">SportHub <br/> Delivered</p>
                        <p className="svgtext">No Contact <br/> policy</p>
                        </div>
                    </div>
                    <div style={{marginTop:10}}>
                        <p className="svgtext" style={{ marginTop:10, marginBottom:10, color: "rgb(112, 112, 112)"}}>Colour: <b style={{color: "black"}}>Yellow</b></p>
                        <p className="svgtext" style={{marginTop:5, marginBottom:5}}> &bull; Ultra Light Weight, Durable and Comfortable</p>
                        <p className="svgtext" style={{marginTop:5, marginBottom:5}}> &bull; Outer Material: High grade Mesh, PVC, Synthetic <br/> Leather</p>
                        <p className="svgtext" style={{marginTop:5, marginBottom:5}}> &bull; Durable and Flexible EVA midsole with Phylon <br/> Rubber Camo color Outsole</p>
                        <p className="svgtext" style={{marginTop:5, marginBottom:5}}> &bull; Super Padded Footbed and Soft Cushioned Ankle <br/> for extra Comfort</p>
                    </div>
                    </div>
                </section>
                <section id="screen3">
                    <h4 className="tag">Related Products</h4>
                    <h6 className="tagdes">No More Wait</h6>
                    <div className="scorl">
                    <div className="align1">
                        <div className="card1">
                            <img src={p11}  className="card-img-top1 im1" />
                            <div className="card-body1">
                            <h6 className="card-title1">GOLAZO Mens White Cricket Shoes with Studs Green 10</h6>
                            <div className="d1">
                                <svg xmlns="http://www.w3.org/2000/svg" className="star" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="star" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="star" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="star" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#C4C1BD"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="star" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#C4C1BD"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                            </div>
                            <div className="d2">
                                <h6>&#8377;</h6>
                                <h5 className="card-title1">619</h5>
                            </div>
                            <p className="card-text1" >January 1<br/>
                                FREE Delivery by <b>SportHub</b></p>
                            <button className="btn1"> Add To Cart </button>
                            </div>
                        </div>
                        <div className="card1">
                            <img src={p33} className="card-img-top1 im1"/>
                            <div className="card-body1">
                            <h6 className="card-title1">B-TUF Fighter Cricket Shoes/Studs Spikes Sports</h6>
                            <div className="d1">
                                <svg xmlns="http://www.w3.org/2000/svg" className="star" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="star" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="star" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="star" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#C4C1BD"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="star" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#C4C1BD"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                            </div>
                            <div className="d2">
                                <h6>&#8377;</h6>
                                <h5 className="card-title1">899</h5>
                                </div>
                                <p className="card-text1" >December 30<br/>
                                FREE Delivery by <b>SportHub</b></p>
                                <button className="btn1"> Add To Cart </button>
                            </div>
                        </div>
                        <div className="card1">
                            <img src={p22} className="card-img-top1 im1" />
                            <div className="card-body1">
                                <h6 className="card-title1">B-TUF Fighter Cricket Shoes/Studs Spikes Sports</h6>
                                <div className="d1">
                                <svg xmlns="http://www.w3.org/2000/svg" className="star" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="star" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="star" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="star" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#C4C1BD"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="star" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#C4C1BD"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                            </div>
                                <div className="d2">
                                <h6>&#8377;</h6>
                                <h5 className="card-title1">799</h5>
                                </div>
                                <p className="card-text1" >January 1<br/>
                                FREE Delivery by <b>SportHub</b></p>
                                <button className="btn1"> Add To Cart </button>
                            </div>
                        </div>
                        <div className="card1">
                        <img src={p77} className="card-img-top1 im1"/>
                        <div className="card-body1">
                            <h6 className="card-title1">B-TUF Unisex-Adult Cricket <br/> Shoe</h6>
                            <div className="d1">
                                <svg xmlns="http://www.w3.org/2000/svg" className="star" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="star" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="star" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="star" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#C4C1BD"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="star" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#C4C1BD"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
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
                        <img src={p55}  className="card-img-top1 im1"/>
                        <div className="card-body1">
                            <h6 className="card-title1">B-Tuf Unisex's Ambition Cricket Shoes</h6>
                            <div className="d1">
                                <svg xmlns="http://www.w3.org/2000/svg" className="star" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="star" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="star" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="star" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#C4C1BD"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="star" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#C4C1BD"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                            </div>
                            <div className="d2">
                            <h6>&#8377;</h6>
                            <h5 className="card-title1">1299</h5>
                            </div>
                            <p className="card-text1">December 31<br/>
                            FREE Delivery by <b>SportHub</b></p>
                            <button  className="btn1"> Add To Cart </button>
                        </div>
                        </div>
                        <div className="card1">
                        <img src={p66} className="card-img-top1 im1" />
                        <div className="card-body1">
                            <h6 className="card-title1">ASE PRO Red Professional Cricket Shoes for Men 7</h6>
                            <div className="d1">
                                <svg xmlns="http://www.w3.org/2000/svg" className="star" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="star" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="star" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="star" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#C4C1BD"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="star" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#C4C1BD"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                            </div>
                            <div className="d2">
                            <h6>&#8377;</h6>
                            <h5 className="card-title1">999</h5>
                            </div>
                            <p className="card-text1">December 31<br/>
                            FREE Delivery by <b>SportHub</b></p>
                            <button className="btn1"> Add To Cart </button>
                        </div>
                        </div>
                        <div className="card1">
                            <img src={p44} className="card-img-top1 im1" />
                            <div className="card-body1">
                                <h6 className="card-title1">GOLAZO Mens White-Yellow Cricket Shoes with Metal</h6>
                                <div className="d1">
                                <svg xmlns="http://www.w3.org/2000/svg" className="star" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="star" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="star" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFAB29"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="star" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#C4C1BD"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="star" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#C4C1BD"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
                            </div>
                            <div className="d2">
                                <h6>&#8377;</h6>
                                <h5 className="card-title1">639</h5>
                                </div>
                                <p className="card-text1">December 31<br/>
                                FREE Delivery by <b>SportHub</b></p>
                                <button className="btn1"> Add To Cart </button>
                            </div>
                        </div>
                    </div>
                    </div>
                </section>  
            </div>
        );
    }
}
export default ProductPage;
