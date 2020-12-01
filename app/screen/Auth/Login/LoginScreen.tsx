import React from 'react'
import { StyleSheet, Text, View, TextInput, Image } from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import { TouchableOpacity } from 'react-native-gesture-handler'
import modules from '../../../modules'
import { NavigationContainer } from '@react-navigation/native';

interface Props {
    onLogin: (name: string, password: string) => void
    
}

const LoginScreen = ({ onLogin }: Props) => {

    const [name, setName] = React.useState("")
    const [password, setPassword] = React.useState("")

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row" }}>
                <Image
                    style={{ height: 60, width: 60, borderRadius: 50 }}
                    source={require('../../../images/ty.jpg')}
                />
                <Text style={styles.txt}>Log in</Text>
            </View>
            <TextInput
                onChangeText={(text) => setName(text)}
                style={styles.txtInput}
                placeholder="Email or phone number"
            />
            <TextInput
                onChangeText={(text) => setPassword(text)}
                style={styles.txtInput}
                secureTextEntry={true}
                placeholder="Password"
            />

            <TouchableOpacity
                onPress={() => onLogin(name, password)}
                style={styles.btnLog}>

                <Text style={styles.txt1}>Log in</Text>
            </TouchableOpacity>
            <View style={styles.chcBox}>
                <CheckBox

                />
                <Text style={{marginVertical:8}}>Remember me</Text>
            </View>
            <Text style={styles.txtSign}>
                Forget Password?
                </Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', margin: 4 }}>
                <View style={{ flex: 1, height: 1, backgroundColor: '#A9A9A9' }} />
                <View>
                    <Text style={{ width: 50, textAlign: 'center' }}>Or</Text>
                </View>
                <View style={{ flex: 1, height: 1, backgroundColor: '#A9A9A9' }} />
            </View>

            <TouchableOpacity 
            
            style={styles.btnCreate}>
                <Text >Create New Account</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({

    btnLog: {
        marginVertical: 12,
        padding: 12,
        backgroundColor: "#1877f2",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    chcBox: {
        flexDirection: "row",
    },
    btnCreate: {
        marginVertical: 12,
        padding: 12,
        backgroundColor: "#e4eefc",
        alignItems: 'center',

        borderRadius: 5
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
    txt1: {
        fontSize: 14,
        fontWeight: "bold",
        color: "white"
    },
    txtInput: {
        backgroundColor: "#FFFFFF",
        marginVertical: 12,
        borderRadius: 6
    },
    txtSign: {
        fontSize: 15,
        textAlign: 'center',
        margin: 5,
        color: '#1877f2'

    }
})
