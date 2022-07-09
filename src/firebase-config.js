import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA_z-sW_MQDns_Uy0iYwTR5gvwcCL5t_RU",
  authDomain: "react-cars-1556a.firebaseapp.com",
  projectId: "react-cars-1556a",
  storageBucket: "react-cars-1556a.appspot.com",
  messagingSenderId: "485159700105",
  appId: "1:485159700105:web:9d9dd186467f2adcf7e858",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
