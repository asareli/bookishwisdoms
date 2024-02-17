import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB38wpn69pYIAQWY2XJ9h_KE3Jk3HTKB04",
    authDomain: "bookishwisdoms-e3bdf.firebaseapp.com",
    projectId: "bookishwisdoms-e3bdf",
    storageBucket: "bookishwisdoms-e3bdf.appspot.com",
    messagingSenderId: "447547674355",
    appId: "1:447547674355:web:c17ea7d2558319408ff186"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);