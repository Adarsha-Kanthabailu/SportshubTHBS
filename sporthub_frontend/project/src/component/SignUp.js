import React, { Component } from "react";
import './pages/css/login.css';

class SignUp extends React.Component{
  render(){
    return(
      <div id="lsloginform">
        <SFormHeader title="Sign Up" />
        <SForm />
        <SOtherMethods />
      </div>
    )
  }
}
const SForm = props => (
   <div>
       <SFormInput description="Username" placeholder="Enter your username" type="text" />
       <SFormInput description="Password" placeholder="Enter your password" type="password"/>
       <SFormInput description="Confirm Password" placeholder="Enter your password" type="password"/>
       <SFormButton title="Sign Up"/>
   </div>
);

export default SignUp;