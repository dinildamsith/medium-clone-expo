
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import {initializeApp} from "@firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBOtGoBYHNCYYNaksqpRrW9hZsmcmCFNC0",
    authDomain: "medium-clone-bade7.firebaseapp.com",
    projectId: "medium-clone-bade7",
    storageBucket: "medium-clone-bade7.firebasestorage.app",
    messagingSenderId: "657807179979",
    appId: "1:657807179979:web:f37940485a0bffe1eadb4e",
    measurementId: "G-L7TV80DB4W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut };