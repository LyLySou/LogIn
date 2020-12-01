import CheckBox from '@react-native-community/checkbox'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'

interface Props {
    // navigation: any
}

const RegisterScreen = (props: Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.txt}>Sign Up</Text>
            <TextInput
                style={styles.txtInput}
                placeholder={'Username'}

            />
            <TextInput
                style={styles.txtInput}
                placeholder={'Email'}
            />


            <TextInput
                style={styles.txtInput}
                secureTextEntry={true}
                placeholder={'Password'}
            />

            <TextInput
                style={styles.txtInput}
                secureTextEntry={true}
                placeholder={'Confirm'}

            />
            <View style={styles.txtInputpw}>
                <CheckBox

                />
                <Text>By signing up you accept the Term of service and Privacy Policy </Text>
            </View>
            <TouchableOpacity style={styles.btnLogout}>
                <Text style={styles.txt1}>Sign Up</Text>
            </TouchableOpacity>

            <Text style={styles.txt2}>
                Already have an account? Log in
            </Text>



        </View>

    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    btnLogout: {
        marginVertical: 12,
        padding: 12,
        backgroundColor: "#1877f2",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    txt1: {
        fontSize: 14,
        fontWeight: "bold",
        color: "white"
    },
    txt2: {
        textAlign: "center"
    },
    txtInputpw: {
        flexDirection: 'row',

    },
    container: {
        flex: 1,
        padding: 12
    },
    txt: {
        fontSize: 24,
        fontWeight: "bold",
        margin: 12
    },
    txtInput: {
        backgroundColor: "#FFFFFF",
        marginVertical: 12,
        borderRadius: 8
    },




})
