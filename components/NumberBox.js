import React from "react";
import {View, Text, StyleSheet} from 'react-native';

// Constants
import Colors from "../constants/Colors";

const NumberBox = props => {
  return(
    <View style={styles.container}>
      <Text style={styles.text}>{props.children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    padding: 10,
    borderColor: Colors.borders,
    borderWidth: 2,
    borderRadius: 5
  },
  text: {
    fontSize: 20
  }
});

export default NumberBox;