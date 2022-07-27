import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBXsqJtzwDLNdUo0fvJaflhefRurQi2JqE",
  authDomain: "chat-25455.firebaseapp.com",
  projectId: "chat-25455",
  storageBucket: "chat-25455.appspot.com",
  messagingSenderId: "684084580673",
  appId: "1:684084580673:web:9d2c833540d0c09d3351c0"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export {app,auth,provider,db}