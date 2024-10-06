import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
    apiKey: "AIzaSyAHaWW9vmxdcCmq0RvZr0WK1mTqexl0KeA",
    authDomain: "etherealnature-a0d5f.firebaseapp.com",
    projectId: "etherealnature-a0d5f",
    storageBucket: "etherealnature-a0d5f.appspot.com",
    messagingSenderId: "76033942066",
    appId: "1:76033942066:web:a20146e7efc0b33304d22b"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Authentication functions
export const signIn = (email: string, password: string) => signInWithEmailAndPassword(auth, email, password);
export const signUp = (email: string, password: string) => createUserWithEmailAndPassword(auth, email, password);
export const logOut = () => signOut(auth);

export const subscribeToAuthChanges = (callback: (user: any) => void) => onAuthStateChanged(auth, callback);