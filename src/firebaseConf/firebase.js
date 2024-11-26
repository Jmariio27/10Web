import { initializeApp } from "firebase/app";

import { getFirestore } from "@firebase/firestore";

const firebaseConf = {
apiKey: "AIzaSyCcOcseiWG_4fsuKCeyi_OKKfg9uIcTors",
authDomain: "proyectoweb-9b4ab.firebaseapp.com",
projectId: "proyectoweb-9b4ab",
storageBucket: "proyectoweb-9b4ab.firebasestorage.app",
messagingSenderId: "319619527347",
appId: "1:319619527347:web:6523ee7c42cba7ab9db6c6",
measurementId: "G-MR4M9KCMCQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConf);

export const db = getFirestore(app)