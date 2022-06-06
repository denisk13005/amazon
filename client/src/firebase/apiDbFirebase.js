import { getDocs, addDoc } from "firebase/firestore"
import { usersCollectionRef } from "./firebase.config"
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth"
import { auth } from "./firebase.config.js"

/**
 * It gets all the documents from the employees collection and returns an array of objects with the
 * document data and the document id
 * @returns An array of objects.
 */
export const getUsers = async () => {
  const data = await getDocs(usersCollectionRef)
  return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
}

/**
 * It takes an object as an argument, and then it adds that object to a collection in Firestore.
 * @param employee
 */
export const createUserDb = async (user) => {
  await addDoc(usersCollectionRef, user)
}

/**
 * Create an user with mail and password in firebase authentication
 * @param {string} email email for create user
 * @param {string} password associated user password
 */
export const createUserAuth = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user
      console.log(user)
    })
    .catch((error) => {
      console.log(error.code, error.message)
    })
}

/**
 *Check the user parmater of connection and return
 * @param {string} email
 * @param {password} password
 * @returns api response
 */

export const signInAuth = async (email, password) => {
  try {
    const resp = await signInWithEmailAndPassword(auth, email, password)

    return resp.user
  } catch (error) {
    return error.code
  }
}
