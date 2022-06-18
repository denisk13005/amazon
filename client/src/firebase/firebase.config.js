import { initializeApp } from "firebase/app"
import { getFirestore, collection } from "@firebase/firestore"
import { getAuth } from "firebase/auth"
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,

  authDomain: process.env.REACT_APP_AUTH_DOMAIN,

  databaseURL: process.env.REACT_APP_DATABASE_URL,

  projectId: process.env.REACT_APP_PROJECT_ID,

  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,

  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,

  appId: process.env.REACT_APP_APP_ID,
}
//app initialization
const app = initializeApp(firebaseConfig)
//bd initialization
export const db = getFirestore(app)
//collection definition
export const usersCollectionRef = collection(db, "users")
export const auth = getAuth(app)
