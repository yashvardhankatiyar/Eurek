// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCm4vMDVBQSTMZjc4piE0Refnc_DvtUrXA",
  authDomain: "eurek-dd137.firebaseapp.com",
  projectId: "eurek-dd137",
  storageBucket: "eurek-dd137.appspot.com",
  messagingSenderId: "628088899151",
  appId: "1:628088899151:web:56b57bcd9217c7b9918c3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB,auth }
