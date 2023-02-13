import firebase from 'firebase/compat'
import 'firebase/auth';

export const login = (email, password) => dispatch => new Promise((resolve, reject) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
        resolve()
    })
    .catch((error) => {
        reject(error)
    })
})

export const register = (email, password) => dispatch => new Promise((resolve, reject) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
        resolve()
    })
    .catch((error) => {
        reject(error)
    })
})