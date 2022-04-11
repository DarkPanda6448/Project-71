import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyCg4gDqyKSvkw4GfNsGkk6R5RIiS5cCxcI",
    authDomain: "project-71-7ba43.firebaseapp.com",
    projectId: "project-71-7ba43",
    storageBucket: "project-71-7ba43.appspot.com",
    messagingSenderId: "642220676963",
    appId: "1:642220676963:web:3340b468b657b96bc6a556"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
