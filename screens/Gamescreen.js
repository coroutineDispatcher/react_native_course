import React, { useState, useRef, useEffect } from 'react'
import { View, Text, StyleSheet, Alert, ScrollView, FlatList } from 'react-native'
import NumberContainer from '../components/NumberContainer'
import Card from '../components/Card'
import DefaultStyles from '../constants/default-styles'
import MainButton from '../components/MainButton'
import { Ionicons } from '@expo/vector-icons'

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

const renderListItem = (listLength, itemData) => (
    <View style={style.listItem}>
        <Text style={DefaultStyles.bodyText}>#{listLength - itemData.index}</Text>
        <Text style={DefaultStyles.bodyText}>{itemData.item}</Text>
    </View>
)

const GameScreen = props => {
    const initialGuess = generateRandomBetween(1, 99, props.userChoice)
    const [currentGuess, setCurrentGues] = useState(initialGuess)
    const [passedGuesses, setPassedGuesses] = useState([initialGuess.toString()])

    const currentLow = useRef(1)
    const currentHigh = useRef(99)

    const { userChoice, onGameOver } = props

    useEffect(() => {
        if (currentGuess === userChoice) {
            onGameOver(passedGuesses.length)
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
            currentLow.current = currentGuess + 1
        }
        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess)
        setCurrentGues(nextNumber)
        setPassedGuesses(previousGuesses => [nextNumber.toString(), ...previousGuesses])
    }

    return (
        <View style={style.screen}>
            <Text style={DefaultStyles.bodyText}>Oponent's guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={style.buttonContainer}>
                <MainButton onClick={() => nextGuessHandler('lower')} ><Ionicons name='md-remove' size={24} color='white' /></MainButton>
                <MainButton onClick={() => nextGuessHandler('greater')} ><Ionicons name='md-add' size={24} color='white' /></MainButton>
            </Card>
            <View style={style.list}>
                <FlatList keyExtractor={(item) => item} data={passedGuesses} renderItem={renderListItem.bind(this, passedGuesses.length)} />
            </View>
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
        alignSelf: 'center',
        width: '95%'
    },
    listItem: {
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 15,
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    list: {
        alignSelf: 'center',
        width: '80%'
    }
})

export default GameScreen