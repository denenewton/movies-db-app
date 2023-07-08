// Import the functions you need from the SDKs you need
import { REACT_APP_API_KEY, REACT_APP_AUTH_DOMAIN, REACT_APP_ID, REACT_APP_MEASUREMENDT_ID, REACT_APP_MESSAGING_SENDER_ID, REACT_APP_PROJECT_ID, REACT_APP_STORANGE_BUCKET } from '../../env'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: REACT_APP_API_KEY,
  authDomain:  REACT_APP_AUTH_DOMAIN,
  projectId: REACT_APP_PROJECT_ID,
  storageBucket:  REACT_APP_STORANGE_BUCKET,
  messagingSenderId: REACT_APP_MESSAGING_SENDER_ID,
  appId:  REACT_APP_ID,
  measurementId:  REACT_APP_MEASUREMENDT_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const storage = getStorage(app);
export const db = getFirestore(app);


