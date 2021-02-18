import React, { useState, useRef, useEffect } from 'react'
import { View, Text, StyleSheet, Button, Alert } from 'react-native'
import NumberContainer from '../components/NumberContainer'
import Card from '../components/Card'
import DefaultStyles from '../constants/default-styles'

const generateRandomBetween = (min, max, excludingNumber) => {
    min = Math.ceil(min) // todo read about ceil
    max = Math.floor(max) // todo read about floor
    const randomNumber = Math.floor((Math.random() * (max - min)) + min)
    if (randomNumber === excludingNumber) {
        return generateRandomBetween(min, max, excludingNumber)
    } else {
        return randomNumber
    }
}

const GameScreen = props => {
    const [currentGuess, setCurrentGues] = useState(generateRandomBetween(1, 99, props.userChoice))
    const [rounds, setRounds] = useState(0)

    const currentLow = useRef(1)
    const currentHigh = useRef(99)

    const { userChoice, onGameOver } = props

    useEffect(() => {
        if (currentGuess === userChoice) {
            onGameOver(rounds)
        }
    }, [currentGuess, userChoice, onGameOver])

    const nextGuessHandler = direction => {
        if ((direction === 'lower' && currentGuess < props.userChoice) || (direction === 'greater' && currentGuess > props.userChoice)) {
            Alert.alert('Don\'t lie!', 'You know that this is wrong...', [{ text: 'Sorry', style: 'cancel' }])
            return
        }
        if (direction == 'lower') {
            currentHigh.current = currentGuess
        } else {
            currentLow.current = currentGuess
        }
        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess)
        setCurrentGues(nextNumber)
        setRounds(currentRounds => currentRounds + 1)
    }

    return (
        <View style={style.screen}>
            <Text style={DefaultStyles.bodyText}>Oponent's guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={style.buttonContainer}>
                <Button title="Lower" onPress={() => nextGuessHandler('lower')} />
                <Button title="Greater" onPress={() => nextGuessHandler('greater')} />
            </Card>
        </View>
    )
}

const style = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignContent: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%',
        alignSelf: 'center'
    }
})

export default GameScreen