import React, {useState} from 'react';
import {View, StyleSheet, Text, Button, TouchableWithoutFeedback, Keyboard, Alert} from 'react-native';

// Componets
import Card from '../components/Card';
import Input from '../components/Input';
import AppButton from '../components/AppButton';
import NumberBox from '../components/NumberBox';

const StartGameScreen = props => {
  // Hooks
  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [enteredNumber, setEnteredNumber] = useState();

  // Handles user input, basically validation for numbers
  const numberInputHandler = inputText => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  };

  // Resets the enteredValue
  const resetInputHandler = () => {
    setConfirmed(false);
    setEnteredValue('');
  }

  // Confirms the userInput aftedr basic validation. We force it through to make sure we're processing numbers
  const confirmInputHandler = () => {
    let userInput = parseInt(enteredValue);
    if(isNaN(userInput) || userInput <= 0 || userInput > 99) {
      Alert.alert('Invalid Input', 'Please select a NUMBER between 1 and 99.', [{text: 'OK', style: 'destructive', onPress: resetInputHandler()}])
      return;
    }
    setConfirmed(true);
    setEnteredNumber(userInput);
    setEnteredValue('');
  }
  
  // Displays message to the user
  let warning;
  if(confirmed) {
    warning = 
    <Card style={styles.warningContainer}>
      <Text>Selected number</Text>
      <NumberBox>
        {enteredNumber}
      </NumberBox>
      <AppButton title={'START GAME'} onPress={() => {props.onStartGame(enteredNumber)}}/>
    </Card>
  }

  return (
    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}> 
      <View style={styles.screen}>
        <Text style={styles.title}>{props.content}</Text>
        <Card style={styles.inputContainer}>
          <Text>Select a number</Text>
          <Input 
            style = {styles.input}
            blurOnSubmit
            autoCorrect = {false}
            keyboardType = "number-pad"
            maxLengh = {2}
            onChangeText = {numberInputHandler}
            value = {enteredValue}
            />
          <View style={styles.buttonsContainer}>
            <AppButton style={styles.inputButtons} title={'RESET'} onPress={() => {resetInputHandler()}}/>
            <AppButton style={styles.inputButtons} title={'CONFIRM'} onPress={() => {confirmInputHandler()}}/>
          </View>
        </Card>
        {warning}
      </View> 
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    marginVertical: 10
  },
  inputContainer: {
    width: '95%',
    alignItems: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 30
  },
  inputButtons: {
    width: 100
  },
  input: {
    width: '50%',
    textAlign: 'center'
  },
  warningContainer: {
    width: '95%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  }
});

export default StartGameScreen;