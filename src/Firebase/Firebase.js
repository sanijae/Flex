// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYW9SfDML2NGWk6HKMhhbhHMwdhdUOK2U",
  authDomain: "flexconnect-e985b.firebaseapp.com",
  projectId: "flexconnect-e985b",
  storageBucket: "flexconnect-e985b.appspot.com",
  messagingSenderId: "103316533378",
  appId: "1:103316533378:web:70a8b9f33fd43391ec449b",
  measurementId: "G-F6WF2Y5VN7"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const database = getFirestore(app)
export const auth = getAuth(app)
auth.useDeviceLanguage();
// auth.getFirebaseAuthSettings().setAppVerificationDisabledForTesting(true);
