import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  getDoc,
  setDoc,
  doc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD-mJso6KzALs07AeMIgBqdgWGzyptYrn8",
  authDomain: "qrcode-338ae.firebaseapp.com",
  projectId: "qrcode-338ae",
  storageBucket: "qrcode-338ae.appspot.com",
  messagingSenderId: "672229810983",
  appId: "1:672229810983:web:0f3ca516a9f758d859bf02",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, collection, getDoc, setDoc, doc, auth };
