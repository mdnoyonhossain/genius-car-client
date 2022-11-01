import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4btoKXVH1mTBGl6LjdPiI5eujx0Us4oU",
  authDomain: "genius-car-5a913.firebaseapp.com",
  projectId: "genius-car-5a913",
  storageBucket: "genius-car-5a913.appspot.com",
  messagingSenderId: "437861557942",
  appId: "1:437861557942:web:c7d0655c6bf6dcd5872817"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;