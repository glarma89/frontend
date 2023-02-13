import { createAsyncThunk } from '@reduxjs/toolkit';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAXwi3e4qgyi4yE9Grpu_w0IaySUrZF4mE",
    authDomain: "gleb-s-tiktok.firebaseapp.com",
    databaseURL: "https://gleb-s-tiktok-default-rtdb.firebaseio.com",
    projectId: "gleb-s-tiktok",
    storageBucket: "gleb-s-tiktok.appspot.com",
    messagingSenderId: "768909221227",
    appId: "1:768909221227:web:881d3d0f6fc635df6dc02e",
    measurementId: "G-ZFRZRENK3X",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Get the Firebase Authentication instance
const auth = getAuth(app);

// Now you can use the auth() method like this:
// auth.createUserWithEmailAndPassword(email, password)
//   .then((userCredential) => {
//     // User signed up successfully
//   })
//   .catch((error) => {
//     // Handle errors here
//   });

  export const register = createAsyncThunk('auth/register', async ({ email, password }) => {
    try {
      await auth.createUserWithEmailAndPassword(email, password)
    } catch (error) {
      throw error;
    }
  });