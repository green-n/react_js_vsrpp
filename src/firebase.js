// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword,GoogleAuthProvider} from "firebase/auth"
import { getFirestore,query,getDocs,collection,where,addDoc} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


const firebaseConfig = {
  apiKey: "AIzaSyBanJbNHQnlHb7mv0NM1xNztnwTINKGQtY",
  authDomain: "rgrvsrpp.firebaseapp.com",
  projectId: "rgrvsrpp",
  storageBucket: "rgrvsrpp.appspot.com",
  messagingSenderId: "715957440323",
  appId: "1:715957440323:web:273efc104701859eac29f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

 const logInWithEmailAndPassword = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log(auth)
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const registerWithEmailAndPassword = async (info) => {
    try {
        console.log(info)
      let {id, userName, email, password} = info
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(res)
      await addDoc(collection(db, "users"), {
        id: id,
        name: userName,
        authProvider: "local",
        email,
      });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  export {logInWithEmailAndPassword, registerWithEmailAndPassword, db }