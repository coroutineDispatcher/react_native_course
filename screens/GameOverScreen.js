import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'

const GameoverScreen = props => {
    return (
        <View style={style.screen}>
            <Text>The game is over!</Text>
            <Text>Number of rounds: {props.rounds}</Text>
            <Text>Number was: {props.userNumber}</Text>
            <Button title="New Game" onPress={props.onRestart} />
        </View>
    )
}

const style = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default GameoverScreen