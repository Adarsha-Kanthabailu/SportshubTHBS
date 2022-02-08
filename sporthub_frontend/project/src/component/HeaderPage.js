import React from "react";
import { GoogleLogin} from 'react-google-login';
import { Link } from "react-router-dom";
import './pages/css/login.css'
import FacebookLogin from 'react-facebook-login';

const clientId = "571723610156-0i3om2lm0vb2t5ssfcrns3h3dhgaiibt.apps.googleusercontent.com";


class HeaderPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {valid:false, showloginButton:true}
        this.openLoginForm = this.openLoginForm.bind(this)
        this.closeLoginForm = this.closeLoginForm.bind(this)
        this.openSignUpForm = this.openSignUpForm.bind(this)
        this.closeSignUpForm = this.closeSignUpForm.bind(this)
        this.changeValid = this.changeValid.bind(this)
        
        
        this.onLoginSuccess = this.onLoginSuccess.bind(this)
        this.onLoginFailure = this.onLoginFailure.bind(this)
        this.onSignoutSuccess = this.onSignoutSuccess.bind(this)
        
    }

    onLoginSuccess = (res) => {
        alert('Login Success:', res.profileObj);
        this.changeValid()
    };

    onLoginFailure = (res) => {
        alert('Login Failed:', res);

    };

    onSignoutSuccess = () => {
        alert("You have been logged out successfully");
        console.clear();
    };





    openSignUpForm(){
        document.getElementById("lssignupform").style.display = "block";
    }
    closeSignUpForm(){
        document.getElementById("lssignupform").style.display = "none";
    }
    openLoginForm(){
        document.getElementById("lsloginform").style.display = "block";
    }
    closeLoginForm(){
        document.getElementById("lsloginform").style.display = "none";
    }
    changeValid(){
        if(this.state.valid){
            this.setState({valid:false})
        }else{
            this.setState({valid:true})
            document.getElementById("lsloginform").style.display = "none";
            document.getElementById("lssignupform").style.display = "none";
        }
    }
    render(){
        let block1;
        if (this.state.valid) {
              block1 = <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <p className="nav-link active" aria-current="page" href="#">
                            <svg width="24" height="24" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_1_16)">
                                <path d="M0 10.769V13.4614H21.5385V16.1537H5.38462V18.846H0V21.5383H18.8462V24.2306H5.38462V26.9229H0V29.6152H16.1538V32.3075H5.38462V34.9998H0V37.6921H13.4615V40.3844H5.38462V51.1537C5.38462 52.769 6.46154 53.846 8.07692 53.846H10.7692C11.3077 49.269 15.3462 45.516 20.1923 45.516C25.0385 45.516 29.0769 48.9998 29.6154 53.846H37.6923C39.3077 53.846 40.3846 52.769 40.3846 51.1537V13.4614C40.3846 11.846 39.3077 10.769 37.6923 10.769H0ZM45.7692 21.5383C44.1538 21.5383 43.0769 22.6152 43.0769 24.2306V51.1537C43.0769 52.4998 44.1538 53.846 45.7692 53.846C46.3077 49.269 50.3462 45.516 55.1923 45.516C60.0385 45.516 64.0769 48.9998 64.6154 53.846H67.3077C68.9231 53.846 70 52.769 70 51.1537V37.6921C70 35.269 67.8112 32.3075 67.8112 32.3075L61.9231 24.2306C60.5769 22.6152 59.7692 21.5383 57.8846 21.5383H45.7692ZM51.1538 26.9229H57.6315C58.17 26.9229 58.7273 27.429 58.7273 27.429L64.3623 35.2529C64.9008 36.0606 65.4581 36.9006 65.4581 37.439H51.1538V26.9229ZM20.1923 48.9675C18.5429 48.9732 16.9627 49.6307 15.7962 50.7968C14.6296 51.9628 13.9714 53.5428 13.965 55.1921C13.9707 56.842 14.6286 58.4226 15.7952 59.5892C16.9618 60.7558 18.5425 61.4137 20.1923 61.4194C21.8421 61.4137 23.4228 60.7558 24.5894 59.5892C25.756 58.4226 26.4139 56.842 26.4196 55.1921C26.4139 53.5423 25.756 51.9616 24.5894 50.795C23.4228 49.6284 21.8421 48.9705 20.1923 48.9648V48.9675ZM55.1923 48.9675C53.5429 48.9732 51.9627 49.6307 50.7962 50.7968C49.6296 51.9628 48.9714 53.5428 48.965 55.1921C48.9707 56.842 49.6286 58.4226 50.7952 59.5892C51.9618 60.7558 53.5425 61.4137 55.1923 61.4194C56.8421 61.4137 58.4228 60.7558 59.5894 59.5892C60.756 58.4226 61.4139 56.842 61.4196 55.1921C61.4139 53.5423 60.756 51.9616 59.5894 50.795C58.4228 49.6284 56.8421 48.9705 55.1923 48.9648V48.9675Z" fill="black"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_1_16">
                                <rect width="70" height="70" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>                
                        </p>
                    </li>
                    <Link to="/wishlist"><li className="nav-item">
                    <p className="nav-link" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" style={{marginLeft:"-15", marginRight:"-10"}} width="24" fill="#363636"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                    </p>
                    </li></Link>
                    <Link to="/cart"><li className="nav-item">
                    <p className="nav-link" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" style={{marginLeft:"-10", marginRight:"-10"}} fill="#363636"><path d="M0 0h24v24H0z" fill="none"/><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>
                    </p>
                    </li></Link>
                    <Link to="/profile"><li className="nav-item">
                    <p className="nav-link" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" style={{marginLeft:"-10", marginRight:"-10"}} fill="#363636"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>
                    </p>
                    </li>
                    </Link>    
                        </ul>
   
        }else{
            block1 =  <ul className="nav justify-content-end">
                        <li className="nav-item">
                        <p className="nav-link" href="#">
                            <button className="headsignin"
                                onClick={
                                    this.openLoginForm
                                }
                            >Sign In</button>
                        </p></li>
                        <li className="nav-item">
                        <p className="nav-link" href="#">
                            <button className="headsignup" style={{zIndex:1}}
                                onClick={
                                    this.openSignUpForm
                                }
                            >Sign Up</button>
                        </p></li>
                    </ul>
        }
        return(
          <div>
            <div >
                <nav  className="navbar navbar-expand-lg navbar-light bg-light heder1">
                <div className="container-fluid">
                    <Link to="/" style={{textDecoration:'none'}}><p className="navbar-brand logo" href="#">SPORTHUB</p></Link>
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <input type="text" className="searchinput" placeholder="Search Product like bat, ball, football"/>
                        </li>
                        <li className="nav-item">
                        <button className="searchbutton">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#363636"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
                        </button>
                        </li>
                    </ul>
                    {/* block */ }
                    {block1}
                </div>
                </nav>
                <ul className="nav lrm justify-content-center">
                    <li className="nav-item">
                    <a className="nav-link sublist">Customer Services</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link sublist active" href="#">Cricket</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link sublist" href="#">Football</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link sublist" href="#">Best Sellers</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link sublist" href="#">Today's Deals</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link sublist" href="#">Prime</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link sublist">Gloves</a>
                    </li>
                </ul>
            </div>
            <div id="lsloginform">
                <FormHeader title="Login" method1={this.closeLoginForm}/>
                <Form vld={this.state.valid} method1={this.changeValid}/>
                <OtherMethods mth1={this.onLoginSuccess} mth2={this.onLoginFailure}/>
            </div>
            <div id="lssignupform">
                <FormHeader title="Sign Up" method1={this.closeSignUpForm} />
                <SForm vld={this.state.valid} method1={this.changeValid}/>
                <OtherMethods mth1={this.onLoginSuccess } mth2={this.onLoginFailure}/>
            </div>
          </div>
        );
    }
}
const FormHeader = props => (
    <div>
        <div style={{width:100+"%", textAlign:"end", paddingRight:10}}>
            <button className="lsclose"
                onClick={
                    props.method1
                }
            ><p style={{fontSize:10}}>&#x2717;</p></button>
        </div>
        <h2 id="lsheaderTitle">{props.title}</h2>
    </div>
);


const Form = props => (
   <div>
     <FormInput description="Username" placeholder="Enter your username" type="text" />
     <FormInput description="Password" placeholder="Enter your password" type="password"/>  
     <FormButton title="Log in" vld1={props.vld} mtd={props.method1}/>
   </div>
);
const SForm = props => (
    <div>
        <FormInput description="Username" placeholder="Enter your username" type="text" />
        <FormInput description="Password" placeholder="Enter your password" type="password"/>
        <FormInput description="Confirm Password" placeholder="Enter your password" type="password"/>
        <FormButton title="Sign Up" vld1={props.vld} mtd={props.method1}/>
    </div>
 );

const FormButton = props => (
  <div id="lsbutton" className="lsrow">
    <button
    onClick={
        props.mtd
    }>{props.title}</button>
  </div>
);

const FormInput = props => (
  <div className="lsrow">
    <p className="lslabel1">{props.description}</p>
    <input type={props.type} placeholder={props.placeholder}/>
  </div>  
);

const OtherMethods = props => (
  <div id="lsalternativeLogin">
      <p className="lsorsigninwith">or SignIn with </p>
    <div id="lsiconGroup">
      <Facebook />
      {/* <Twitter /> */}
      <Google />
    </div>
  </div>
);

const responseFacebook = (response) => {
    console.log(response);
}

const componentClicked = (data) => {
    console.log(data);
}

const Facebook = props => (
  <FacebookLogin
  appId="1073503783491688"
  autoLoad={true}
  textButton="F"
  className="fblg"
  size="small"
  fields="name,email,picture"
  onClick={componentClicked}
  callback={responseFacebook} />
  );

const Google = props => (
  <GoogleLogin
    className="lggle"
    clientId={clientId}
    buttonText=""
    onSuccess={props.mth1}
    onFailure={props.mth2}
    cookiePolicy={'single_host_origin'}
  />
  );
export default HeaderPage;