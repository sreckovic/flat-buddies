import firebase from "firebase";

import "./config";

let config = {
  apiKey: config.apiKey,
  authDomain: "flat-buddies.firebaseapp.com",
  databaseURL: "https://flat-buddies.firebaseio.com",
  projectId: "flat-buddies",
  storageBucket: "flat-buddies.appspot.com",
  messagingSenderId: config.messagingSenderId
};

firebase.initializeApp(config);

export const ref = firebase.database().ref();
export const auth = firebase.auth;
export const providerFacebook = new firebase.auth.FacebookAuthProvider();
export const providerGoogle = new firebase.auth.GoogleAuthProvider();
