import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import Colors from '../constants/colors'


const MainButton = props => {
    return (
        <TouchableOpacity activeOpacity={0.6} onPress={props.onClick}>
            <View style={style.button}>
                <Text style={style.buttonText}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    button: {
        backgroundColor: Colors.primary,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25
    },
    buttonText: {
        color: 'white',
        fontFamily: 'open-sans',
        fontSize: 18
    }
})


export default MainButton