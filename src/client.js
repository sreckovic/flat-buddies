import firebase from "firebase";

let config = {
  apiKey: "AIzaSyCn8HUpry-P8XW17XOcpTDKaUfWJYxefYo",
  authDomain: "flat-buddies.firebaseapp.com",
  databaseURL: "https://flat-buddies.firebaseio.com",
  projectId: "flat-buddies",
  storageBucket: "flat-buddies.appspot.com",
  messagingSenderId: "555089575808"
};

firebase.initializeApp(config);

export const ref = firebase.database().ref();
export const auth = firebase.auth;
export const provider = new firebase.auth.FacebookAuthProvider();
