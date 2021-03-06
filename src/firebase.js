// Import the functions you need from the SDKs you need

const { initializeApp } = require("firebase/app");
const { getAuth, initializeAuth } = require("firebase/auth");


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: process.env.FIREBASE_APIKEY ?? "",

  authDomain: process.env.FIREBASE_AUTH_DOMAIN ?? "",

  projectId: process.env.FIREBASE_PROYECT ?? "",

  storageBucket: process.env.FIREBASE_STORAGE_BUCKET ?? "",

  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID ?? "",

  appId: process.env.FIREBASE_APP_ID ?? "",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


module.exports = auth;
