import React, {useState, useRef, useEffect} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import AppButton from '../components/AppButton';

// Components
import NumberBox from '../components/NumberBox';
import Card from '../components/Card';

// Functions
function generateRandom(min, max, exclude) {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  if(randomNumber === exclude) {
    return generateRandom(min, max, exclude);
  } else {
    return randomNumber;
  }
}

const GameScreen = props => {
  // States, hooks
  const [currentGuess, setCurrentGuess] = useState(generateRandom(1, 100, props.userChoice));
  const [rounds, setRounds] = useState(0);

  // References
  // We use useRef to initiate the reference, and then, using the user input to set the currentLow/High.current to a new low/high
  const currentHigh = useRef(100);
  const currentLow = useRef(1)

  // Object disconstruction
  const {userChoice, onGameOver} = props;

  // Checks when the game is over
  useEffect(() => {
    if(currentGuess == userChoice) {
      onGameOver(rounds);
    }
  }, [currentGuess, userChoice, onGameOver]);

  // Methods
  const nextGuessHandler = tip => {
    // First, we check if the user is providing a valid tip
    if((tip == 'smaller' && currentGuess < props.userChoice) || (tip == 'greater' && currentGuess > props.userChoice)) {
      Alert.alert('You\'re providing the wrong tip!', 'Please provide a correct tip.', {text: 'OK! Sorry!', style: 'cancel'});
      return;
    }

    // If there's a valid input, we will work the logic
    if(tip == 'smaller') {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }

    const guessNextNumber = generateRandom(currentLow.current, currentHigh.current, currentGuess);
    
    // Re-run the logic
    setCurrentGuess(guessNextNumber);
    setRounds(curRounds => curRounds + 1);
  }

  return(
    <View style={styles.screen}>
      <Card style={styles.guessContainer}>
        <Text>Computer Guess:</Text>
        <NumberBox>{currentGuess}</NumberBox>
        <View style={styles.buttonsContainer}>
          <AppButton
            title={'SMALLER'}
            onPress={nextGuessHandler.bind(this, 'smaller')}
          />
          <AppButton
            title={'GREATER'}
            onPress={nextGuessHandler.bind(this, 'greater')}
          />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  guessContainer: {
    width: '95%',
    alignItems: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between',
    paddingHorizontal: 20
  }
});

export default GameScreen;
