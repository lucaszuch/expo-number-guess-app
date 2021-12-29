import React from "react";
import { TextInput, StyleSheet } from "react-native";

// Constants
import Colors from "../constants/Colors";

const Input = (props) => {
  return (
    <TextInput
      {...props} // This spread operator allows to place the 'props' in the origin and and pass it down, hence why it should be located before the styles
      style={{...styles.input, ...props.style}}
    />         
  );
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: Colors.accent,
    borderBottomWidth: 1,
    marginVertical: 10
  }
});

export default Input;