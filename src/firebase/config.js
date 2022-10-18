// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD6w-4oBxtH5HAj_CA1kz35UjShYziP_wY",
  authDomain: "livechat-98e8c.firebaseapp.com",
  projectId: "livechat-98e8c",
  storageBucket: "livechat-98e8c.appspot.com",
  messagingSenderId: "308972126860",
  appId: "1:308972126860:web:5281b6d67c15e034ce71a9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const timestamp = serverTimestamp();
const auth = getAuth();

export { db, auth, timestamp };
