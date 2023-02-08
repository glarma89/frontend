import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { Provider } from 'react-redux';
import firebase from 'firebase/compat/app'
import AuthScreen from './src/screens/auth';
//import store from './src/redux-tool/store';

if (firebase.apps.length === 0) {
  firebase.initializeApp({
  apiKey: "AIzaSyAXwi3e4qgyi4yE9Grpu_w0IaySUrZF4mE",
  authDomain: "gleb-s-tiktok.firebaseapp.com",
  databaseURL: "https://gleb-s-tiktok-default-rtdb.firebaseio.com",
  projectId: "gleb-s-tiktok",
  storageBucket: "gleb-s-tiktok.appspot.com",
  messagingSenderId: "768909221227",
  appId: "1:768909221227:web:881d3d0f6fc635df6dc02e",
  measurementId: "G-ZFRZRENK3X"
})
}


export default function App() {
  return (
    // <Provider>
      <View style={styles.container}>
        <AuthScreen />
      </View>
    // </Provider>
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
