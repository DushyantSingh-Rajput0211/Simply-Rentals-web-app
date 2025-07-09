// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAh6N0xhmi1s0d1jylenYOa4z_yjGX_iKk',
  authDomain: 'simply-3e2b5.firebaseapp.com',
  projectId: 'simply-3e2b5',
  storageBucket: 'simply-3e2b5.appspot.com',
  messagingSenderId: '342328739632',
  appId: '1:342328739632:web:80d1a2253056f310ea6af5',
  measurementId: 'G-89QGDZT7KF',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
