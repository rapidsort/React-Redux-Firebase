import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAmZ3ZqUycVeKR2L9HzW0YLYbJjH9-dewc",
    authDomain: "readtappdb.firebaseapp.com",
    databaseURL: "https://readtappdb.firebaseio.com",
    projectId: "readtappdb",
    storageBucket: "readtappdb.appspot.com",
    messagingSenderId: "755796931686"
  };
  firebase.initializeApp(config);
  // firebase.firestore().settings({timestampsInSnapshots: true});

  export default firebase;