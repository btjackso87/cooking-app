import firebase from "firebase";
import 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyBR05xTtsvz1h8-wUzR0r7ZsK7SFfuW9U8",
  authDomain: "cooking-ninja-site-a5f0d.firebaseapp.com",
  projectId: "cooking-ninja-site-a5f0d",
  storageBucket: "cooking-ninja-site-a5f0d.appspot.com",
  messagingSenderId: "515520604120",
  appId: "1:515520604120:web:522c1811b84e0dbba974ad"
};


//init firebase
firebase.initializeApp(firebaseConfig)


//init services
const projectFirestore = firebase.firestore()


export {projectFirestore}