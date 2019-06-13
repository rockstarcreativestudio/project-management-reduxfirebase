  import firebase from 'firebase/app'
  import 'firebase/firestore'
  import 'firebase/auth'
  
  // Initialize Firebase
  let config = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    databaseURL: process.env.REACT_APP_DBURL,
    projectId: process.env.REACT_APP_PROJID,
    storageBucket: process.env.REACT_APP_STORBUCKET,
    messagingSenderId: process.env.REACT_APP_MSGSENDERID
  };

  firebase.initializeApp(config);

  export default firebase;