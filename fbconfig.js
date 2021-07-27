import * as firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyC7LXQZFf6SIPA705xCp-AbZWIvUI68WRE",
  authDomain: "fetouh63-app.firebaseapp.com",
  projectId: "fetouh63-app",
  storageBucket: "fetouh63-app.appspot.com",
  messagingSenderId: "622751929929",
  appId: "1:622751929929:web:822b92b501201c822a1198",
  measurementId: "G-GXXTCTXQZ0",
};

firebase.initializeApp(firebaseConfig);

export { firebase };
