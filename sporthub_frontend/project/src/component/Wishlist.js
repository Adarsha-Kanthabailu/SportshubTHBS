import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import bat from './productpage/bat.jpg';

class Wishlist extends React.Component{
    render(){
        return(
          <div>
              <div className="container">
                <div className="d-block p-2 bg-light text-dark" style={{display: 'flex', flexDirection: 'row'}}>
                  <span className="d-block p-2 bg-dark text-white"><h5>You have 1 item in your wishlist</h5></span>
                  <div className="card mb-3" >
                    <div style={{ display: 'flex', flexDirection: 'row'}}>
                      <div >
                        <img src={bat} alt={"shaker"} className="card-img im1" style={{width:200}}/> 
                      </div>
                      <div className="col-md-8">
                        <div className="card-body" style={{display: 'flex', flexDirection: 'row'}}>
                          <div style={{display: 'flex', flexDirection: 'column'}} >
                            <h5 className="card-title1"> XTROKE Popular Willow Cricket Ba</h5>
                            <p className="price1">₹ 1200</p>  
                          </div>
                          <div className='flow1'> 
                            <p><button className="btn1 xe1">Move to Cart</button></p>
                            <p><button className="btn1 xe1" style={{backgroundColor: 'transparent'}}>Delete</button></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>   
              <div className="d-flex justify-content-center">
                <Link to="/"><button type="button" className="btn1" style={{width:200}}>Continue Shopping</button></Link>
              </div>    
            </div>
          </div>
        </div>
          )
        }
}
export default Wishlist