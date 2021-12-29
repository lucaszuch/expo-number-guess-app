import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

// Importing components
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();

  const startGameHandler = enteredNumber => {
    setUserNumber(enteredNumber)
  };

  let contentDisplayed = <StartGameScreen content={'Start a new game!'} onStartGame={startGameHandler}/>

  // If that's a set number, we will change the display
  if(userNumber) {
    contentDisplayed = <GameScreen userChoice={userNumber} />
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
