import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBzeFZgx5KLkEcJ5XE3BggBjvyAaXID-JM',
  authDomain: 'clone-c4030.firebaseapp.com',
  databaseURL: 'https://clone-c4030.firebaseio.com',
  projectId: 'clone-c4030',
  storageBucket: 'clone-c4030.appspot.com',
  messagingSenderId: '6740287703',
  appId: '1:6740287703:web:8c0b778f48861f59a49092',
  measurementId: 'G-7J4WPK422S',
});

const dp = firebaseApp.firestore();
const auth = firebase.auth();

export { dp, auth };
