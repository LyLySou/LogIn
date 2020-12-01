import AsyncStorage from '@react-native-async-storage/async-storage';
import * as React from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import HomeScreen from './HomeScreen';


export interface AppProps {
    navigation: any
}

export interface AppState {
}

export default class HomeContainer extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = {
        };
    }
    _onLogout = async () => {

        await AsyncStorage.removeItem('user')
            .then(() => {
                Alert.alert("log out")
                this.props.navigation.navigate("Login")

            })
            .catch(() => {
                Alert.alert("Log out Fail")
            })
     
    }
    public render() {
        return (
            <HomeScreen
                onLogout={this._onLogout}

            />

        );
    }
}
