import { configureStore } from '@reduxjs/toolkit';
// import { authReducer } from '../reducers/auth'; '@reduxjs/toolkit';
// import { chatReducer } from '../reducers/chat';
// import { modalReducer } from '../reducers/modal';
// import { postsReducer } from '../reducers/posts';


export const store = configureStore({
    reducer: {
        auth: authReducer,
        // posts: postsReducer,
        // modal: modalReducer,
        // chat: chatReducer,
    },
})

export default store