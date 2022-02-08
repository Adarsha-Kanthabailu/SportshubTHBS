import { initializeApp } from 'firebase/app' 
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBncclENlJ6QgJEjNaMYnhVcVMGAt-Gs1M",
    authDomain: "fir-user-reg-auth-db860.firebaseapp.com",
    projectId: "fir-user-reg-auth-db860",
    storageBucket: "fir-user-reg-auth-db860.appspot.com",
    messagingSenderId: "70495267855",
    appId: "1:70495267855:web:b9205f32ea4a8e09d8877a"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app) 
  export {auth}