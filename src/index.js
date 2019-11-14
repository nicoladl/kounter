import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import React from "react";
import ReactDOM from "react-dom";
import Router from "./router/Router";
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'

let store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
// store.subscribe(() => console.log(store.getState()))

// Dispatch
// store.dispatch(addFood({ food: 'fish' }))

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById("root")
);
