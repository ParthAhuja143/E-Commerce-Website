import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBDQRHHzqgMaMdv4fogb_23sAvfNx2fOFU",
    authDomain: "clone-96988.firebaseapp.com",
    projectId: "clone-96988",
    storageBucket: "clone-96988.appspot.com",
    messagingSenderId: "925289436325",
    appId: "1:925289436325:web:f57fdda2a9788b0c73e94c",
    measurementId: "G-1Z9EKLLLSP"
};

const firebaseApp  = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

const auth = firebase.auth()

export {db , auth}