import { initializeApp } from "firebase/app"
import { getFirestore, collection } from "@firebase/firestore"
import { getAuth } from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyAoTkAa23IHnA6dAsiH3_YOn2-C59rjGPA",

  authDomain: "clo-d1b40.firebaseapp.com",

  // databaseURL: process.env.REACT_APP_DATABASE_URL,

  projectId: "clo-d1b40",

  storageBucket: "clo-d1b40.appspot.com",

  messagingSenderId: "622262053511",

  appId: "1:62226205351:web:52afbf2a0dbfa282d0e982",
}
//app initialization
const app = initializeApp(firebaseConfig)
//bd initialization
export const db = getFirestore(app)
//collection definition
export const usersCollectionRef = collection(db, "users")
export const auth = getAuth(app)
