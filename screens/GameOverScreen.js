import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// Components
import AppButton from '../components/AppButton';

const GameScreen = props => {
  return(
    <View style={styles.screen}>
      <View style={styles.innerScreen}>
        <Text>The computer guessed it! The game is over!</Text>
        <Text>Your number was: {props.userGuess}</Text>
        <Text>It took {props.roundsNumber} rounds!</Text>
      </View>
      <AppButton title={'NEW GAME'} onPress={props.onRestart}/>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  innerScreen: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center'
  },

});

export default GameScreen;
