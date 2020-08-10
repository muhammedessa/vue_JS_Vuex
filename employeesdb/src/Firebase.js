import * as firebase from 'firebase'; 

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyBfIq6n3SoIdJvlBh859JUQbUMMOMNV4oA",
    authDomain: "vuejstest-cf692.firebaseapp.com",
    databaseURL: "https://vuejstest-cf692.firebaseio.com",
    projectId: "vuejstest-cf692",
    storageBucket: "vuejstest-cf692.appspot.com",
  };

  firebase.initializeApp(config);
  firebase.firestore().settings(settings);
  export default firebase;
 