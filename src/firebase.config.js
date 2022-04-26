
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAxZG6ES0Z5Gd6huyxBZNe2LYYTiBXfYI8",
    authDomain: "dogtraining-c7906.firebaseapp.com",
    projectId: "dogtraining-c7906",
    storageBucket: "dogtraining-c7906.appspot.com",
    messagingSenderId: "304242431285",
    appId: "1:304242431285:web:f4a6b458ad0ea1f198287c",
    measurementId: "G-8LD2B3QYF3"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

const storage = getStorage(app, firebaseConfig.storageBucket);
const storageRef = (theStoreage, url) => {
    console.log(storage);
    console.log(url);
    return ref(theStoreage, url)
};

export { db, app, storage, storageRef, uploadBytesResumable, getDownloadURL };