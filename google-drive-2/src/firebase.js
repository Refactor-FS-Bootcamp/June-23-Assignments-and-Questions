import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBrnxwqMf4Oka51ioq8R_UXBcwvIvZLQeE",
    authDomain: "drive-clone-d7c7a.firebaseapp.com",
    projectId: "drive-clone-d7c7a",
    storageBucket: "drive-clone-d7c7a.appspot.com",
    messagingSenderId: "568370907210",
    appId: "1:568370907210:web:0cdd803bac6b1bf421beb3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, storage, auth, provider }