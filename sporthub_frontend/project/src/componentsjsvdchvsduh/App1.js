import React, {useState} from 'react'
import firebase from './firebase';
import './App1.css'

import SignIn from './SignIn';

const App1 = () => {

  const [viewOtpForm, setViewOtpForm] = useState(false);

  const setupRecaptcha = () => { 
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "normal",
        callback: function (response) {
          console.log("Captcha Resolved");
          loginSubmit();
        },
        defaultCountry: "IN",
      }
    )
  }

  const loginSubmit = (e) => {
    e.preventDefault();
    setupRecaptcha()
    this.configureCaptcha()
    let phone_number = "+91" + e.target.phone.value;
    console.log(phone_number)
    const appVerifier = window.recaptchaVerifier;
      
    firebase
      .auth()
      .signInWithPhoneNumber(phone_number, appVerifier)
      .then((confirmationResult) => {
        console.log("otp sent");
        setViewOtpForm(true);
        window.confirmationResult = confirmationResult;
        otpSubmit() 
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const otpSubmit = (e) => {
    e.preventDefault();

    let opt_number = e.target.otp_value.value;

    window.confirmationResult
      .confirm(opt_number)
      .then((confirmationResult) => {
        console.log(confirmationResult);
        console.log("success");
        window.open("/", "_self");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <SignIn 
      loginSubmit={loginSubmit} 
      otpSubmit={otpSubmit} 
      viewOtpForm={viewOtpForm}
      />
  );
};
export default App1;