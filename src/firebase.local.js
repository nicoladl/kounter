import Rebase from "re-base";
import firebase from "firebase/app";
import "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  // your config
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

//Use Rebase
const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;
