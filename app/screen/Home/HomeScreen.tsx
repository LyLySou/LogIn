import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity ,Image} from 'react-native'

interface Props {
    onLogout: () => void
}

const HomeScreen = ({ onLogout }: Props) => {
    return (
        <View style={styles.container}>
            <Image 
            source={{uri:'https://i.ebayimg.com/images/g/RVUAAOSwwJ1eTQrj/s-l640.jpg'}}
            style={styles.img}
            />
            <Text style={styles.txt}>Welcome To Home Screen</Text>
            <TouchableOpacity
                onPress={onLogout}
                style={styles.btnLogout}>
                <Text style={styles.txtbtn}>Log Out</Text>
            </TouchableOpacity>
        </View>



    )
}

export default HomeScreen

const styles = StyleSheet.create({
    img:{
    width:100,
    height:100,
    borderRadius:50
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    txt: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    txtbtn: {
        fontSize: 24,
        fontWeight: 'bold',
        color: "white"
    },
    btnLogout: {
        marginVertical: 12,
        padding: 12,
        backgroundColor: "#24a0ed",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5

    }


})
