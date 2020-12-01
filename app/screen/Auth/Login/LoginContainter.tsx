import * as React from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import LoginScreen from './LoginScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeScreen from '../../Home/HomeScreen';

export interface AppProps {
    navigation: any
}

export interface AppState {
}

export default class LoginContainer extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = {
        };
    }
    
    _onLogin = async (name: string, password: string) => {
        const doc = {
            name: name,
            password: password
        }
        await AsyncStorage.setItem('user', JSON.stringify(doc)).then(() => {
            Alert.alert("Done")
            this.props.navigation.navigate("Home")

        })

        .catch(()=>{
            Alert.alert("Error")
        })


    }
    public render() {
        return (

            <LoginScreen
                onLogin={(name, password) => this._onLogin(name, password)}

            />


        );
    }
}
