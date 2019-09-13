import Rebase from "re-base";
import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBA8Gwx7omYnoSCZujw-35mQPy0PANM51M",
  authDomain: "kounter-92315.firebaseapp.com",
  databaseURL: "https://kounter-92315.firebaseio.com",
  projectId: "kounter-92315",
  storageBucket: "",
  messagingSenderId: "604239372694",
  appId: "1:604239372694:web:2c995aaefdacd98d3abdb7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Use Rebase
const base = Rebase.createClass(firebaseApp.database());

export { firebaseConfig };
export default base;
