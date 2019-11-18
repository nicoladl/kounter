import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import React from "react";
import ReactDOM from "react-dom";
import Router from "./router/Router";
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import firebase from "firebase/app";

const db = firebase.database();
let store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
let profile = ''
store.subscribe(
  () => {
    // console.log(store.getState())
    profile = store.getState().profile.userProfile.name
    fromStore(store.getState(), db)
  }
)

// Function to update the db when store changes
const fromStore = (store, db) => {
  db.ref(`${profile.value}/food/`).set(store.food);
};

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById("root")
);
