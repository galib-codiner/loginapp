import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBbrJIWfbh-8EVltlY04JgpzUOk1zEUqdc",
    authDomain: "login-app-d158e.firebaseapp.com",
    projectId: "login-app-d158e",
    storageBucket: "login-app-d158e.appspot.com",
    messagingSenderId: "811585770003",
    appId: "1:811585770003:web:f6876e2da1ca0756dba5e6",
    measurementId: "G-PRJKGMVJVE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;