import React from 'react'
import { View, StyleSheet, Text, Button, Image } from 'react-native'
import DefaultStyles from '../constants/default-styles'
import Colors from '../constants/colors'
import MainButton from '../components/MainButton'

const GameoverScreen = props => {
    return (
        <View style={style.screen}>
            <Text style={DefaultStyles.bodyText}>The game is over!</Text>
            <View style={style.imageContainer}>
                <Image
                    fadeDuration={1000}
                    style={style.image} resizeMode='cover'
                    source={require('../assets/images/success.png')}
                />
            </View>
            {/* use for 2 lines */}
            <View style={style.resultContainer}>
                <Text style={{ ...DefaultStyles.bodyText, ...style.fullText }}>
                    Your phone needed <Text style={style.highlight}>{props.rounds}</Text> to find that the guessed number was <Text style={style.highlight}>{props.userNumber}</Text>
                </Text>
            </View>
            <MainButton onClick={props.onRestart} >New Game</MainButton>
        </View>
    )
}

const style = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 200,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 30,
    },
    highlight: {
        color: Colors.primary
    },
    resultContainer: {
        marginHorizontal: 20,
        marginVertical: 20
    },
    fullText: {
        textAlign: 'center'
    }
})

export default GameoverScreen