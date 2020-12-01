import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'


interface Props {

}

const WelcomeScreen = (props: Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.load}>Loading</Text>
            <ActivityIndicator
                color="blue"
            />

        </View>
    )

}




export default WelcomeScreen

const styles = StyleSheet.create({
    load:{
    fontWeight:'bold'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
    }
})
