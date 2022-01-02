import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';

// Importing components
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

// Functions
const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
}

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if(!dataLoaded) {
    return (
    <AppLoading
      startAsync={fetchFonts}
      onFinish={() => setDataLoaded(true)}
      onError={err => console.log(err)}
    />);
  }

  const newGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  }

  const startGameHandler = enteredNumber => {
    setUserNumber(enteredNumber)
  };

  const gameOverHandler = numOfRounds => {
    setGuessRounds(numOfRounds);
  };

  let contentDisplayed = <StartGameScreen content={'Start a new game!'} onStartGame={startGameHandler}/>

  // If that's a set number, we will change the display
  if(userNumber && guessRounds <= 0) {
    contentDisplayed = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/>
  } else if(guessRounds > 0) {
    contentDisplayed = <GameOverScreen userGuess={userNumber} roundsNumber={guessRounds} onRestart={newGameHandler}/>
  }

  return (
    <View style={styles.screen}>
      <Header title={'GUESS A NUMBER'}/>
      {contentDisplayed}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
