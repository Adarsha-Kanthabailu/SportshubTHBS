import React, {Component} from 'react';
import bat from './productpage/bat.jpg';
import secure from './productpage/secure.jpg';
import visa from './productpage/visa.png';
import shaker from './productpage/shaker.png';
import { Link } from 'react-router-dom';

class Cart extends React.Component{
  
    constructor(props){
      super(props)
      this.displayRazorpay = this.displayRazorpay.bind(this)
      this.loadscript = this.loadscript.bind(this)
    }

     loadscript(src){
      return new Promise(resolve =>{
      const script = document.createElement('script')
      script.src = 'https://checkout.razorpay.com/v1/checkout.js'
      document.body.appendChild(script)
      script.onload = () => {
        resolve(true)
      }
        script.onerror = () => {
          resolve(false)
        }
      })
    }
    
    async displayRazorpay(){
      const res = await this.loadscript('https://checkout.razorpay.com/v1/checkout.js')
  
      if(!res){
        alert('Razorpay SDk failed to load. Are you online?')
        return
      }
  
      const data = await fetch('http://localhost:1337/razorpay',{method: 'POST'}).then((t) =>
        t.json()
      )
      console.log(data)
  
      var options = {
        key:'rzp_test_yG2l3M0Xpx8J3C',
        currency: data.currency,
        amount: data.amount.toString(),
        order_id: data.id,
        name: 'SportHub',
        description: 'Thank you for completing your order',
        image:'http://localhost:1337/logo.svg',
        handler: function(response){
          alert(response.razorpay_payment_id)
          alert(response.razorpay_order_id)
          alert(response.razorpay_signature)
        }
      }
  
      const paymentObject = new window.Razorpay(options)
      paymentObject.open()
    }

    render(){
        return(
        <div>
        <div className="container">
        <div> 
            <img src={secure} width={100 + '%'} height={100 + 'px'}/>
        </div>
        <br/>
        <div className="d-block p-2 bg-light text-dark" style={{textAlign:'center'}}>
            <h4 className="float-left">You have 2 items in your bag</h4>
            <br/>
        <div className="d-block p-2 bg-light text-dark">
    
            <table className="table table-hover">
                <thead className="thead-dark">
                  <tr>
                    <th className="col-md-1" scope="col">#</th>
                    <th className="col-md-5" scope="col">Items</th>
                    <th className="col-md-2" scope="col">Quantity</th>
                    <th className="col-md-1" scope="col">Price</th>
                    <th className="col-md-1" scope="col">Sub Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>
                        <div className="float-left">
                        <span>
                            <img src={shaker} width={70 + '%'} height={100 + 'px'}/>
                            <p className="float-right" style={{color:'black', fontWeight:'bold'}}>Boldfit Plastic Gym Typhoon Shaker</p>
                        </span>    
                    </div>
                    </td>
                    <td>
                      <h6>1</h6>
                    </td>
                    <td><h6>800</h6></td>
                    <td><h6>800.00</h6></td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td><div className="float-left">
                        <span>
                            <img src={bat} width={70 + '%'} height={100 + 'px'}/>
                            <p className="float-right" style={{color:'black', fontWeight:'bold'}}>XTROKE Popular Willow Cricket Bat</p>
                        </span>    
                    </div>
                </td>
                    <td>
                      <h6>1</h6>
                    </td>
                    <td><h6>1200</h6></td>
                    <td><h6>1200</h6></td>
                  </tr>
                </tbody>
              </table>
            <br clear="all" />
        </div>
        <br/>
        <div className="d-block p-2 bg-light text-dark">
            <div className="input-group mb-3" style={{marginTop:-70}}>
              <input type="text" placeholder="Enter promo code.." className='promo_inp'/>
              <button className="btn1 xe1" type="button">Apply</button>
            </div>
    
            <div className="card mb-3 float-right" style={{"width": 30 + 'rem', borderColor:'rgb(255, 154, 22)'}}>
                <div className="card-header bg-transparent" style={{borderColor:'rgb(255, 154, 22)'}}>
                  <div className='float_one_line'>
                    <p className="float-left" style={{width:500, textAlign:'left', fontSize:16}}>Buy Total</p>
                    <p className="float-right" style={{fontSize:16}}>2000</p>  
                  </div>
                    <br clear="all" />
                  <div className='float_one_line'>
                    <p className="float-left" style={{width:500, textAlign:'left', fontSize:16}}>Buy Discount</p>
                    <p className="float-right" style={{fontSize:16}}>-500</p>  
                  </div>
                </div>
                <div className="card-body text-success">
                    <h6 className="card-title">
                    <div className='float_one_line'>
                      <p className="float-left" style={{width:500, textAlign:'left', fontSize:16}}>GST</p>
                      <p className="float-right" style={{fontSize:16}}>+50</p>  
                    </div>
                    <br clear="all" />
                    <div className='float_one_line'>
                      <p className="float-left" style={{width:500, textAlign:'left', fontSize:16}}>Coupon</p>
                      <p className="float-right" style={{fontSize:16}}>-150</p>  
                    </div>
                    <br clear="all" />
                    <div className='float_one_line'>
                      <p className="float-left" style={{width:500, textAlign:'left', fontSize:16}}>Delivery</p>
                      <p className="float-right" style={{fontSize:16}}>+100</p>  
                    </div>
                  </h6>
                </div>
                <div className="card-footer float_one_line" style={{backgroundColor:'rgb(255, 154, 22)'}}>
                    <p className="float-left" style={{width:500, fontWeight:'bold', color:'black', textAlign:'left', fontSize:16}}>Order Total</p>
                    <p className="float-right" style={{fontSize:16, fontWeight:'bold', color:'black'}}>₹1500.00</p>
                </div>
              </div>
              <br clear="all" />
            </div>
            <br/>
              <div className="d-block p-2 bg-light text-dark" style={{marginTop:-70}}>
                  <span className="float-right">
                      <Link to="/"><button type="button" className="btn1 xe1" >Continue Shopping</button></Link>
                      <button type="button" className="btn1 xe1" onClick={this.displayRazorpay} style={{ backgroundColor: 'transparent' }}>Pay Securely Now <i className="fa fa-arrow-right"></i></button>
                  </span>
              </div>
            </div>
          </div>
      </div>)
    }
}

export default Cart