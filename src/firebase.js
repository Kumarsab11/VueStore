import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  doc,
  getDoc,
} from "firebase/firestore/lite";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHmfeQTKjtwwlG0uZxTM70t3dqHuHQNpY",
  authDomain: "vuestore-49487.firebaseapp.com",
  projectId: "vuestore-49487",
  storageBucket: "vuestore-49487.appspot.com",
  messagingSenderId: "688756273067",
  appId: "1:688756273067:web:e64aee43de88560da86cee",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
  app,
  db,
  doc,
  collection,
  getDocs,
  addDoc,
  getDoc,
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
};
