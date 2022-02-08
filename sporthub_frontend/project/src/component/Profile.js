import React from "react";
import './pages/css/profile.css'
import p11 from './productpage/f5.jpeg';


const Profile = () => {
  return(
    <div>
      <div className="prcontainer">
          <div className="prleft_container">
            <p className="prpcss1 prpcss2">Edit Profile</p>
            <p className="prpcss2">Notification</p>
            <p className="prpcss2">Order Details</p>
            <p className="prpcss2">Password & Security</p>
          </div>
          <div className="prright_container">
            <div className="prprofileimg">
                <img src={p11} className="pr_img"/>
            </div>
            <div className="prprofileimg prullist">
              <div className="prlist1">
                <p>1</p>
                <p>Cart</p>
              </div>
              <div className="prlist1">
                <p>1</p>
                <p>Order</p>
              </div>
              <div className="prlist1">
                <p>1</p>
                <p>Wishlist</p>
              </div>

            </div>
            <div style={{textAlign:"center"}}>
              Name: <input value="Troy Tommy" className="inputfield"/><br/>
              Email: <input value="Troy@gmail.com" className="inputfield"/><br/>
              Phone: <input value="+91 9812737672" className="inputfield"/><br/>
              Address: <input value="RG Trade Tower, 301, 3 rd Floor, Netaji Subhash Place, New Delhi, Delhi 110034" className="inputfield"/>
              <div>
                <button className="save">Save</button>
                <button className="cancel">Cancel</button>
              </div> 
            </div>
          </div>
      </div>
    </div>
  );
}
export default Profile;