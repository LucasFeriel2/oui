import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyDKdsIH3omWkBIOXyMXdTsrsY0gorN0pU4",
    authDomain: "jdashr-35458.firebaseapp.com",
    projectId: "jdashr-35458",
    storageBucket: "jdashr-35458.appspot.com",
    messagingSenderId: "289459771445",
    appId: "1:289459771445:web:0490e77cd98e24ccf0f97c",
    measurementId: "G-9MBNB303XH"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
