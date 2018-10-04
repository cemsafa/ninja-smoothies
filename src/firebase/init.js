import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCDc2Iy2cQgMsAZhxNSh8lK2JYpVLWCqgE",
    authDomain: "ninja-smoothies-4ff4f.firebaseapp.com",
    databaseURL: "https://ninja-smoothies-4ff4f.firebaseio.com",
    projectId: "ninja-smoothies-4ff4f",
    storageBucket: "ninja-smoothies-4ff4f.appspot.com",
    messagingSenderId: "761633081943"
  };
  const firebaseApp = firebase.initializeApp(config);
  firebaseApp.firestore().settings({ timestampsInSnapshots: true })

  // Export firestore database
  export default firebaseApp.firestore()
