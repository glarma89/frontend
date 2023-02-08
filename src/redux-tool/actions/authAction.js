import { createAction } from '@reduxjs/toolkit';
import firebase from 'firebase/compat';
//require('firebase/firebase-auth')
require('firebase/auth')

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

export const login = createAction( (email, password) => dispatch => new Promise((resolve, reject) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
        resolve()
    })
    .catch(() => {
        reject()
    })
}))

export const register = createAction( (email, password) => dispatch => new Promise((resolve, reject) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
        resolve()
    })
    .catch(() => {
        reject()
    })
}))