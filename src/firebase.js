import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCo9JBh4sAdl3usggiJKT-Yl6V9xUQm5GI",
  authDomain: "clone-9d87b.firebaseapp.com",
  projectId: "clone-9d87b",
  storageBucket: "clone-9d87b.appspot.com",
  messagingSenderId: "476403581418",
  appId: "1:476403581418:web:986adb3caef1a9301e7293",
  measurementId: "G-BPD1CQKTGM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
