import React from "react";
import location from "./productpage/map.jpeg";
import call from "./productpage/call.jpeg";
import mail from "./productpage/mail.jpeg";
import './pages/css/contact.css'
import imge from './productpage/contact1.jpg';
class ContactUs extends React.Component {
    render() {
        return ( 
            <div>
                <div className="cnt-image-con">
                    <img src={imge} className="cnt-image"/>
                    <h2 className="cnt-heder-text">Get In Touch With us</h2>
                </div>
                <div className="cnt-container">
                    <div className="cnt-left-container">
                        <h2 className="cnt-text-logo">Contact Us</h2>
                        <div className="cnt-location-con">
                            <img src={location} className="cnt-location-img"/>
                            <p className="cnt-location-text">SEZ 4C, 2nd Floor, West wing,<br/> Unit 201,RMZ Ecoworld, <br/> Marathahalli outer ring road, Village</p>
                        </div>
                        <div className="cnt-location-con">
                            <img src={mail} className="cnt-location-img"/>
                            <p className="cnt-location-text">sporthub@gmail.com</p>
                        </div>
                        <div className="cnt-location-con">
                            <img src={call} className="cnt-location-img"/>
                            <p className="cnt-location-text">+91 9837766248</p>
                        </div>
                    </div>
                    <div className="cnt-right-container">
                        <div className="cnt-inner-con">
                            <p className="cnt-label" >Name</p>
                            <input className="cnt-input" placeholder="Enter a Name"/>
                        </div>
                        <div className="cnt-inner-con">
                            <p className="cnt-label" >Email</p>
                            <input className="cnt-input" placeholder="Enter a Email"/>
                        </div>
                        <div className="cnt-inner-con">
                            <p className="cnt-label" >Phone no.</p>
                            <input className="cnt-input" placeholder="Enter a Phone Number"/>
                        </div>
                        <div className="cnt-inner-con">
                            <p className="cnt-label" >Message</p>
                            <input className="cnt-input-msg" placeholder="Enter a Message"/>
                        </div>
                        <button className="cnt-btn">Contact</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactUs;