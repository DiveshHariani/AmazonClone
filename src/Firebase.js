import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAE6LmpgJmlUX5EfZQVFFNeQgPOAZsX46s",
    authDomain: "clone-143ca.firebaseapp.com",
    databaseURL: "https://clone-143ca.firebaseio.com",
    projectId: "clone-143ca",
    storageBucket: "clone-143ca.appspot.com",
    messagingSenderId: "722665385191",
    appId: "1:722665385191:web:0c718aec9418e39f364642"
});

const auth = firebase.auth();

export {auth};