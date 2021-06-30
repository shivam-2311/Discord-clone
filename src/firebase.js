import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDmJ9qbYMbkspCRNC8WPRfDtzYorEQsQ3s",
    authDomain: "discord-clone-fd381.firebaseapp.com",
    projectId: "discord-clone-fd381",
    storageBucket: "discord-clone-fd381.appspot.com",
    messagingSenderId: "550866382474",
    appId: "1:550866382474:web:a8dbfca028df695f1b8773",
    measurementId: "G-4STW480BBN"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;