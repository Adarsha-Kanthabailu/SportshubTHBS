import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';


// const firebaseConfig = {
//   apiKey: "AIzaSyBncclENlJ6QgJEjNaMYnhVcVMGAt-Gs1M",
//   authDomain: "fir-user-reg-auth-db860.firebaseapp.com",
//   projectId: "fir-user-reg-auth-db860",
//   storageBucket: "fir-user-reg-auth-db860.appspot.com",
//   messagingSenderId: "70495267855",
//   appId: "1:70495267855:web:b9205f32ea4a8e09d8877a"
// };
const firebaseConfig = {
  apiKey: "AIzaSyAe-DGjpZoG3P8NYi--_MKu55C9bUTCWPk",
  authDomain: "project-590be.firebaseapp.com",
  projectId: "project-590be",
  storageBucket: "project-590be.appspot.com",
  messagingSenderId: "623263178674",
  appId: "1:623263178674:web:64d88cceeb8f16b24d8eab",
  measurementId: "G-JGMHLYW2WP"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
  
export default firebase