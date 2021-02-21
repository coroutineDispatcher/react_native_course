import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import * as Font from 'expo-font'
import Header from './components/Header'
import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/Gamescreen'
import GameOverScreen from './screens/GameOverScreen'
import AppLoading from 'expo-app-loading'

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {
  const [userNumber, setUserNumber] = useState()
  const [guessRounds, setGuessRounds] = useState(0)
  const [dataLoaded, setDataLoaded] = useState(false)

  if (!dataLoaded) {
    return <AppLoading startAsync={fetchFonts} onFinish={() => setDataLoaded(true)} onError={(err) => console.log(err)} />
  }

  const configureNewGameHandler = () => {
    setGuessRounds(0)
    setUserNumber(null)
  }

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber)
  }

  const gameOverHandler = roundsNumber => {
    setGuessRounds(roundsNumber)
  }

  let content = <StartGameScreen onStartGame={startGameHandler} />

  if (userNumber && guessRounds <= 0) {
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
  } else if (guessRounds > 0) {
    content = <GameOverScreen rounds={guessRounds} userNumber={userNumber} onRestart={configureNewGameHandler} />
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
