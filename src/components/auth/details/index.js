import React, { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import styles from './style';
import { Feather } from '@expo/vector-icons'; 
import { useDispatch } from 'react-redux';
//import { login, register } from '../../../redux-old/actions';
//import { login, register } from '../../../redux-tool/actions/authAction';
//import { login, register } from '../../../redux-tool/commonFile'
import { login, register } from '../../../redux-tool/actions/authAction';


export default function AuthDetails({ authPage, setDetailsPage }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch()

    const handleLogin = () => {
        dispatch(login(email, password))
            .then(() => {
                console.log('login successful');
            })
            .catch(() => {
                console.log('login unsuccessful');
            })
    }

    const handleRegistration = () => {
        dispatch(register(email, password))
            .then(() => {
                console.log('register successful');
            })
            .catch(() => {
                console.log('register unsuccessful');
            })
    }


    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setDetailsPage(false)}>
                <Feather name="arrow-left" size={24} color="black" />
            </TouchableOpacity>
            <TextInput 
                onChange={(text) => setEmail(text)}
                style={styles.textInput}
                placeholder='Email'
            />
            <TextInput 
                onChange={(text) => setPassword(text)}
                style={styles.textInput}
                placeholder='Password'
            />

            <TouchableOpacity 
                style={styles.button}
                onPress={() => authPage == 0 ? handleLogin() : handleRegistration()}
            >
                <Text style={styles.buttonText}>{authPage == 0 ? 'Sign In' : 'Sign Up'}</Text>
            </TouchableOpacity>
        </View>
    )
}