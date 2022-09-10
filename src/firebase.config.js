import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB5oH0BYhHU8mcm8_wMTXTsCRBVguEJQzo",
  authDomain: "food-store-app-a6091.firebaseapp.com",
  databaseURL:
    "https://food-store-app-a6091-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "food-store-app-a6091",
  storageBucket: "food-store-app-a6091.appspot.com",
  messagingSenderId: "38350087991",
  appId: "1:38350087991:web:f8af1c1dceb0b0c0819cb2",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
