import React, {Component} from "react";
import "./pages/css/test.css";

import p11 from './productpage/f1.jpeg';
import p22 from './productpage/f3.jpeg';
import p33 from './productpage/f2.jpeg';
import p44 from './productpage/f4.jpeg';
import p55 from './productpage/f5.jpeg';
import p66 from './productpage/f6.jpeg';
import p77 from './productpage/f7.jpeg';
import p88 from './productpage/feedback.jpg';

class Feedback extends React.Component {
  render() {
    return (
      <div>
        <div>
        <section id="fscreen3">
            <h4 className="tag">User Reviews</h4>
            <div className="scorl">
            <div className="align1">
                <div className="card2">
                    <img src={p11}  className="card-img-top1 fim" />
                    <div className="card-body1">
                      <h5 className="name">Daisy Deborah</h5>
                      <h6 className="designation" >daisy@gmail.com</h6>
                      <p className="card-text1" style={{fontSize:10}}><b style={{fontSize:24}}>&#8220;</b> This shift has hugely helped customers make more informed purchase decisions that are based on real-life stories <b style={{fontSize:24}}>&#8221;</b></p>
                    </div>
                </div>
                <div className="card2">
                    <img src={p22}  className="card-img-top1 fim" />
                    <div className="card-body1">
                      <h5 className="name">Paul Ricardo</h5>
                      <h6 className="designation" >paul@gmail.com</h6>
                      <p className="card-text1" style={{fontSize:10}} ><b style={{fontSize:24}}>&#8220;</b> product use cases reported by the actual consumers of items. SPORTHUB is still the obligatory source of information for buyers.<b style={{fontSize:24}}>&#8221;</b></p>
                    </div>
                </div>
                <div className="card2">
                    <img src={p33}  className="card-img-top1 fim" />
                    <div className="card-body1">
                      <h5 className="name">Joey johnny</h5>
                      <h6 className="designation" >joey@gmail.com</h6>
                      <p className="card-text1" style={{fontSize:10}} ><b style={{fontSize:24}}>&#8220;</b> SPORTHUB is the largest online behemoth. As you probably know, SPORTHUB is a well-known forerunner of e-commerce,<b style={{fontSize:24}}>&#8221;</b></p>
                    </div>
                </div>
                <div className="card2">
                    <img src={p44} className="card-img-top1 fim" />
                    <div className="card-body1">
                      <h5 className="name">Lucy Lauren</h5>
                      <h6 className="designation" >lucy@gmail.com</h6>
                      <p className="card-text1"  style={{fontSize:10}}><b style={{fontSize:24}}>&#8220;</b> The rule with SPORTHUB Customer Reviews is simple → if a product is available on SPORTHUB, you'll find product reviews for it <b style={{fontSize:24}}>&#8221;</b></p>
                    </div>
                </div>
                <div className="card2">
                    <img src={p55}  className="card-img-top1 fim" />
                    <div className="card-body1">
                      <h5 className="name">Troy Tommy</h5>
                      <h6 className="designation" >troy@gmail.com</h6>
                      <p className="card-text1" style={{fontSize:10}} ><b style={{fontSize:24}}>&#8220;</b> since the platform offers numerous types of products, it's the place to have on your list when distributing your product reviews online<b style={{fontSize:24}}>&#8221;</b></p>
                    </div>
                </div>
                <div className="card2">
                    <img src={p66}  className="card-img-top1 fim" />
                    <div className="card-body1">
                      <h5 className="name">Neil Ted</h5>
                      <h6 className="designation" >neil@gmail.com</h6>
                      <p className="card-text1" style={{fontSize:10}} ><b style={{fontSize:24}}>&#8220;</b> apart from a textual review (the description), products are typically evaluated with a five-star rating scale <b style={{fontSize:24}}>&#8221;</b></p>
                    </div>
                </div>
                <div className="card2">
                    <img src={p77}  className="card-img-top1 fim" />
                    <div className="card-body1">
                      <h5 className="name">Tracey Melody</h5>
                      <h6 className="designation" >tracey@gmail.com</h6>
                      <p className="card-text1" style={{fontSize:10}} ><b style={{fontSize:24}}>&#8220;</b> Practically, those stars represent the average customer opinion about an item.<b style={{fontSize:24}}>&#8221;</b></p>
                    </div>
                </div>
            </div>
            </div>
        </section>  
        </div>
        <div className="outpart">
          <div className="part1">
            <img src={p88} className="img1"/>
          </div>
          <div className="contact1">
          <div className="container-contact1">
            <form className="contact1-form" style={{paddingTop:10}} method="POST">
              <div className="wrap-input1">
                <label htmlFor="name">Name:</label>
                <input
                  className="input1"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter Name"
                  autoComplete="off"
                />
                <span className="shadow-input1" />
              </div>
              <div className="wrap-input1">
                <label htmlFor="email">Email:</label>
                <input
                  className="input1"
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Enter email"
                  autoComplete="off"
                />
                <span className="shadow-input1" />
              </div>
              <div className="wrap-input1">
                <label htmlFor="subject">Subject:</label>
                <input
                  className="input1"
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Enter subject"
                  autoComplete="off"
                />
                <span className="shadow-input1" />
              </div>
              <div className="wrap-input1">
                <label htmlFor="message">Message:</label>
                <textarea
                  className="input1"
                  name="message"
                  id="message"
                  placeholder="Enter message"
                  defaultValue={""}
                />
                <span className="shadow-input1" />
              </div>
              <div className="container-contact1-form-btn">
                <button className="contact1-form-btn">
                  <span>Submit</span>
                </button>
              </div>
            </form>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Feedback;
