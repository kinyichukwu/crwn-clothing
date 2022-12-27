// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDLqF47sS8H9DPomhwYlu693OOAgP8VhuM",
  authDomain: "crwn-clothing-db-fd5d6.firebaseapp.com",
  projectId: "crwn-clothing-db-fd5d6",
  storageBucket: "crwn-clothing-db-fd5d6.appspot.com",
  messagingSenderId: "975106281194",
  appId: "1:975106281194:web:3a6515bb811dfe94469193",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid)

    console.log(userDocRef)
    const userSnapshot = await getDoc(userDocRef)
    console.log(userSnapshot)

    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        }catch(err){
            console.log('Error while creating user', err.message)
        }
    }
}