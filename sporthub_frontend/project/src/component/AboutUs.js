import React from "react";
import exc from './productpage/aboutus.jpeg';
import './pages/css/about.css'
import imge from './productpage/aboutus.jpg';

class AboutUs extends React.Component{
    render(){
        return(
            <div>
                <div className="abt-image-con">
                    <img src={imge} className="abt-image"/>
                    <h2 className="abt-heder-text">About us</h2>
                </div>
                <div className="abt-container">
                    <div className="abt-img-container">
                        <img src={exc} className="abt-img"/>
                    </div>
                    <div className="abt-text-container">
                        <h2 className="abt-h2">About Us</h2>
                        <h6 className="abt-des">Want to know us</h6>
                        <p className="abt-dtl">
                            <b style={{color:'black'}}>SPORTHUB</b> is a premier sports ecommerce site launched
                            in 2021. It is founded by Adarsha, Adarsh,
                            Adithya,Naman and Sudhanshu.This site offers various
                            sports materials and accessories of cricket,
                            football and other popular sports.
                        </p>
                        <button className="abt-btn">Know more</button>
                    </div>
                </div>
                <div>
                    <div className="abt-quts">
                        <h6>
                            <span style={{fontSize:20, paddingRight:10}}>"</span><span><b>SPORTHUB</b></span> <span>promotes a healthy and active lifestyle -
                            no fanatical weight loss or perfect body
                            ideals.&nbsp;Our goal is to teach users to create
                            happiness within.We believe that each person
                            deserves good health&nbsp;Inspired by the world
                            around us and united by our values we dedicate our
                            craft to making an impact.</span><span style={{fontSize:20, paddingLeft:10}}>"</span>
                        </h6>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutUs;