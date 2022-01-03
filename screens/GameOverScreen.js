import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

// Components
import AppButton from '../components/AppButton';
import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts'

const GameScreen = props => {
  return(
    <View style={styles.screen}>
      <View style={styles.innerScreen}>
        <Text style={styles.title}>The computer guessed it! The game is over!</Text>
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/success.png')}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <Text>Your number was: {props.userGuess}</Text>
        <Text>It took {props.roundsNumber} rounds!</Text>
      </View>
      <AppButton
        title={'NEW GAME'}
        onPress={props.onRestart}
        style={styles.button}
      />
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
  title: {
    fontFamily: Fonts.openSansBold,
  },
  imageContainer:{
    width: '80%',
    height: 275,
    borderRadius: 300,
    borderWidth: 3,
    borderColor: Colors.accent,
    overflow: 'hidden',
    marginVertical: 20
  },
  image: {
    height: '100%',
    width: '100%'
  },
  button: {
    marginVertical: 20,
    paddingHorizontal: 20
  }
});

export default GameScreen;
