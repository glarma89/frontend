import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { Provider } from 'react-redux';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
//import rootReducer from './src/redux-old/reducers'
import firebase from 'firebase/compat/app'
//import firebase from 'firebase/compat'
import AuthScreen from './src/screens/auth';
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger'

import store from './src/redux-tool/storeGPT';

//const store = configureStore({ reducer: rootReducer, middleware: [thunk], })

//const store = createStore(rootReducer, applyMiddleware(thunk))

if (firebase.apps.length === 0) {
  firebase.initializeApp({
  apiKey: "AIzaSyAXwi3e4qgyi4yE9Grpu_w0IaySUrZF4mE",
  authDomain: "gleb-s-tiktok.firebaseapp.com",
  databaseURL: "https://gleb-s-tiktok-default-rtdb.firebaseio.com",
  projectId: "gleb-s-tiktok",
  storageBucket: "gleb-s-tiktok.appspot.com",
  messagingSenderId: "768909221227",
  appId: "1:768909221227:web:881d3d0f6fc635df6dc02e",
  measurementId: "G-ZFRZRENK3X",
})
}


export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <AuthScreen />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
