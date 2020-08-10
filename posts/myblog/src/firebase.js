import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyDzImeB7ofj4dVhqsPb6IQpQqcP2V_LKKc",
    authDomain: "myblog-bb1e3.firebaseapp.com",
    databaseURL: "https://myblog-bb1e3.firebaseio.com",
    projectId: "myblog-bb1e3",
    storageBucket: "myblog-bb1e3.appspot.com",
    messagingSenderId: "762837665698",
    appId: "1:762837665698:web:bf1ba3a37c43d4695fd4fb",
    measurementId: "G-52N9W8S8M3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig); 


  const db = firebase.firestore();
  const auth = firebase.auth();


const userCollection = db.collection('users')
const postsCollection = db.collection('posts')



export {
    db,
    auth,
    userCollection,
    postsCollection
}


