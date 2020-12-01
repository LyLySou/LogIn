import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface Props {
    name:string
    position:string
}

const Card = (props: Props) => {
    return (
        <View>
            <Text>Well Done!</Text>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({})
