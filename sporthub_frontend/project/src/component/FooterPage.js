import React from "react";
import me from './card/american-express.png';
import dis from './card/discover.png';
import mc from './card/mastercard.svg';
import ap from './card/alipay.svg';
import di from './card/discover.png';

import m from './card/money.png';
import pp from './card/paypal.png';
import vi from './card/visa (1).png';
import elo from './card/elo.svg';
import up from './card/unionpay.svg';

import fb from './follo/facebook.png';
import it from './follo/instagram.png';
import tw from './follo/twitter.png';
import yt from './follo/youtube.png';
import { Link } from "react-router-dom";

class FooterPage extends React.Component{
    render(){
        return(
            <div className="div1" style={{backgroundColor: "rgb(199, 199, 199)"}}>
                <div className="footer" >
                    <div className="s1" style={{fontSize: 12, marginLeft: 5}}>We Accept</div>
                    <div className="s2" style={{fontSize: 12}}>Get to know us</div>
                    <div className="s3" style={{fontSize: 12}}>Follow us</div>
                </div>
                <div className="footer">
                    <div className="s1">
                        <div>
                            <img src={ me } className="acc"/>
                            <img src={ dis } className="acc"/>
                            <img src={ mc } className="acc" />   
                            <img src={ ap } className="acc" />
                            <img src={ di } className="acc"/>     
                        </div>
                        <div>
                            <img src={ m } className="acc" />
                            <img src={ pp } className="acc"/>
                            <img src={ vi } className="acc"/>
                            <img src={ elo } className="acc"/>
                            <img src={ up } className="acc" />
                        </div>
                    </div>
                    <div className="s2">
                        <Link to="/aboutus" style={{textDecoration:'none'}}><a href="#" className="au"><p style={{ fontSize:9, marginTop:3, marginLeft:4}}>About Us</p></a></Link>
                        <Link to="/contactus" style={{textDecoration:'none'}}><a href="#" className="au"><p style={{ fontSize:9, marginLeft:4}}>Contact Us</p></a> </Link>
                        <Link to="/feedback" style={{textDecoration:'none'}}><a href="#" className="au"><p style={{ fontSize:9, marginLeft:4}}>Feedback</p></a></Link>
                    </div>
                    <div className="s3">
                        <img src={ fb } className="fol"/>
                        <img src={ it } className="fol"/>
                        <img src={ tw } className="fol"/>
                        <img src={ yt } className="fol"/>
                    </div>
                </div>
            </div>
        );
    }
}
export default FooterPage;