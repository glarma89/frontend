//import { createAction } from '@reduxjs/toolkit';
import { configureStore, createSlice } from '@reduxjs/toolkit';
// import firebase from 'firebase/compat';
// require('firebase/auth')
const firebase = require('firebase/app');
require('firebase/auth')
const { createAsyncThunk } = require("@reduxjs/toolkit")


//Initial state
const initialState = {
    currentUser: null,
    loaded: false,
    error: null, //?
}

//create Async Thunk
const loginAction = createAsyncThunk((email, password) => dispatch => new Promise((resolve, reject) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            resolve()
        })
        .catch(() => {
            reject()
        })
}))

const registerAction = createAsyncThunk((email, password) => dispatch => new Promise((resolve, reject) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
            resolve()
        })
        .catch((error) => {
            reject(error)
        })
}))

//slice
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) => {
        //Handle lifecycle - pending - seccess, rejected

        //pending
        builder.addCase(registerAction.pending, (state, action) => {
            state.loaded = true;
        });
        //fulfield
        builder.addCase(registerAction.fulfilled, (state, action) => {
            state.currentUser = action.payload;
        });
        //rejected
        builder.addCase(registerAction.rejected, (state, action) => {
            state.loaded = false;
            state.currentUser = null;
            state.error = action.payload; //?
        })
        // login: (state, action) => {

        // },

        // register: (state, action) => {

        // }

        // login: (email, password) => new Promise((resolve, reject) => {
        //     firebase.auth().signInWithEmailAndPassword(email, password)
        //         .then(() => {
        //             resolve()
        //         })
        //         .catch((error) => {
        //             reject(error)
        //         })
        // }),

        // register: (email, password) => new Promise((resolve, reject) => {
        //     firebase.auth().createUserWithEmailAndPassword(email, password)
        //         .then(() => {
        //             resolve()
        //         })
        //         .catch((error) => {
        //             reject(error)
        //         })
        // })

    }
})

//generate reducer
const authReducer = authSlice.reducer;

const store = configureStore({
    reducer: authReducer,
})

export const { login, register} = authSlice.actions

export default authSlice.reducer;

// export const login = (email, password) => dispatch => new Promise((resolve, reject) => {
//     firebase.auth().signInWithEmailAndPassword(email, password)
//         .then(() => {
//             resolve()
//         })
//         .catch(() => {
//             reject()
//         })
// })

// export const register = (email, password) => dispatch => new Promise((resolve, reject) => {
//     firebase.auth().createUserWithEmailAndPassword(email, password)
//         .then(() => {
//             resolve()
//         })
//         .catch((error) => {
//             reject(error)
//         })
// })

//action
// const authAction = () => {
//     return {
//         type: 'USER_STATE_CHANGE'
//     }
// }

//reducer
// const authReducer = (state = initialState, action) => {
//     if (action.type === 'USER_STATE_CHANGE') {
//         return {
//             currentUser: state.currentUser = currentUser,
//             loaded: state.loaded = true
//         }
//     }
// };


// const login = createAction()
// const register = createAction()
// console.log(login);
// console.log(register);