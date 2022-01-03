import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

// Constants
import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';

const AppButton = props => {
  return(
    <TouchableOpacity onPress={props.onPress}>
      <View style={{...styles.button, ...props.style}}>
        <Text style={styles.innerButton}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    borderRadius: 6,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10
  },
  innerButton: {
    color: '#FFF',
    fontSize: 15,
    fontFamily: Fonts.openSansRegular
  }
});

export default AppButton;