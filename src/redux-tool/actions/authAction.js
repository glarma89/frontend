import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
//import firebase from 'firebase/compat';
//const firebase = require('firebase/app'); //?
//require('firebase/firebase-auth')
//require('firebase/auth') //?

//==============================================

//import firebase from 'firebase/compat/app';
//require('firebase/auth')

//===============================================

import firebase from 'firebase/compat/app';
//import { getAuth } from 'firebase/auth';
require('firebase/auth')

//=========================== old version of redux ========================

// export const login = (email, password) => dispatch => new Promise((resolve, reject) => {
//     firebase.auth().signInWithEmailAndPassword(email, password)
//     .then(() => {
//         resolve()
//     })
//     .catch(() => {
//         reject()
//     })
// })

// export const register = (email, password) => dispatch => new Promise((resolve, reject) => {
//     firebase.auth().createUserWithEmailAndPassword(email, password)
//     .then(() => {
//         resolve()
//     })
//     .catch(() => {
//         reject()
//     })
// })

//============================= createAction ===================================

// export const login = createAction( (email, password) => dispatch => new Promise((resolve, reject) => {
//     firebase.auth().signInWithEmailAndPassword(email, password)
//     .then(() => {
//         resolve()
//     })
//     .catch(() => {
//         reject()
//     })
// }))

// export const register = createAction( (email, password) => dispatch => new Promise((resolve, reject) => {
//     firebase.auth().createUserWithEmailAndPassword(email, password)
//     .then(() => {
//         resolve()
//     })
//     .catch(() => {
//         reject()
//     })
// }))

//================================= createAsyncThunk =====================================

//const auth = getAuth(firebase);

export const login = createAsyncThunk('auth/login', async ({ email, password }) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password); // firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      throw error;
    }
  });

export const register = createAsyncThunk('auth/register', async ({ email, password }) => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
      throw error;
    }
  });