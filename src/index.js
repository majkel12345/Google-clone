import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase'
import {StateProvider} from './StateProvider'
import reducer, {initialState} from './reducer'


ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


const firebaseConfig = {
  apiKey: "AIzaSyCcE3w0IG0px-yYTwYq9NGNq06627S5-G0",
  authDomain: "clone-41065.firebaseapp.com",
  databaseURL: "https://clone-41065.firebaseio.com",
  projectId: "clone-41065",
  storageBucket: "clone-41065.appspot.com",
  messagingSenderId: "701082811268",
  appId: "1:701082811268:web:fa8e20251dbcea5a483bd1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
