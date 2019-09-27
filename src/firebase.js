import Rebase from "re-base";
import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "your-apiKey",
  authDomain: "your-authDomain",
  databaseURL: "your-databaseURL"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

//Use Rebase
const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;
