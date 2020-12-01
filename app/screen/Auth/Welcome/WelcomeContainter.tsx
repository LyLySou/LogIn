import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import WelcomeScreen from './WelcomeScreen';
import  AsyncStorage  from '@react-native-async-storage/async-storage';
import { retry } from 'redux-saga/effects';

export interface AppProps {
    navigation: any
}

export interface AppState {
}

export default class WelcomeContainer extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = {
        };
    }
    async componentDidMount() {
        const data = await AsyncStorage.getItem('user').then((item) => {
            return item
        })
        if (data) {
            this.props.navigation.navigate("Home")
        
        }
        else {
            this.props.navigation.navigate("Login")
        }
    }

    public render() {
        return (
            <WelcomeScreen />

        );
    }
}
