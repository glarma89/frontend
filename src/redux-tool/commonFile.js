import { createAction } from '@reduxjs/toolkit';
import firebase from 'firebase/compat';
require('firebase/auth')

const initialState = {
    currentUser: null,
    loaded: false,
}

//action
const authAction = () => {
    return {
        type: 'USER_STATE_CHANGE'
    }
}

//reducer
const authReducer = (state = initialState, action) => {
    if (action.type === 'USER_STATE_CHANGE') {
        return {
            currentUser: state.currentUser = currentUser,
            loaded: state.loaded = true
        }
    }
};


// const login = createAction()
// const register = createAction()
// console.log(login);
// console.log(register);