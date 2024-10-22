import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAxQkFfdsRm8mEnnhcaTCt2x7NZKhUE98",
  authDomain: "fir-practice-5fe3e.firebaseapp.com",
  projectId: "fir-practice-5fe3e",
  storageBucket: "fir-practice-5fe3e.appspot.com",
  messagingSenderId: "816239303668",
  appId: "1:816239303668:web:d072dab5dfafcc447637a1",
  measurementId: "G-TSTF3HG8CP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export { db, collection, addDoc };
