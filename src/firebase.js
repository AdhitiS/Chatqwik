import firebase from 'firebase';



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBfg8l_WsGRB8ZM9pN0_vQ3z-iRq3U3JV8",
    authDomain: "chatqwik.firebaseapp.com",
    projectId: "chatqwik",
    storageBucket: "chatqwik.appspot.com",
    messagingSenderId: "567486587482",
    appId: "1:567486587482:web:70c13b57e92a14c579ae63",
    measurementId: "G-78KN3BVDP3"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth =firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;