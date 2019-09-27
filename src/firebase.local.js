import Rebase from "re-base";
import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBA8Gwx7omYnoSCZujw-35mQPy0PANM51M",
  authDomain: "kounter-92315.firebaseapp.com",
  databaseURL: "https://kounter-92315.firebaseio.com"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

//Use Rebase
const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;
