// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { storage, ref } from "firebase/storage";
import firebase from "firebase/app";
import "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJ9YBMO7oDXuWfEhTpbGn2TkgfBH7o74U",
  authDomain: "photoalbum-61335.firebaseapp.com",
  //   databaseUrl: "https://photoalbum-61335.appspot.com",
  projectId: "photoalbum-61335",
  storageBucket: "photoalbum-61335.appspot.com",
  messagingSenderId: "373431833155",
  appId: "1:373431833155:web:1fbbc1093ab3b29c777af6",
  measurementId: "G-7RTK8MCF7Y",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
