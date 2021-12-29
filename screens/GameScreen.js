import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AppButton from '../components/AppButton';

// Components
import NumberBox from '../components/NumberBox';
import Card from '../components/Card';

// Functions
function generateRandom(min, max, exclude) {
  min = Math.ceil(min);
  max = Math.floor(max);
  let randomNumber = Math.floor(Math.random() * (max - min)) * min;
  if(randomNumber === exclude) {
    return generateRandom(min, max, exclude);
  } else {
    return randomNumber;
  }
}

const GameScreen = props => {
  // States, hooks
  const [currentGuess, setCurrentGuess] = useState(generateRandom(1, 100, props.userChoice));

  return(
    <View style={styles.screen}>
      <Card style={styles.guessContainer}>
        <Text>Computer Guess:</Text>
        <NumberBox>{currentGuess}</NumberBox>
        <View style={styles.buttonsContainer}>
          <AppButton styles={styles.controlButtons} title={'LOWER'} onPress={() => console.log('Lower!')}/>
          <AppButton styles={styles.controlButtons} title={'GREATER'} onPress={() => console.log('Greater!')}/>
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
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 30
  },
  controlButtons: {
    width: 80
  }
});

export default GameScreen;
