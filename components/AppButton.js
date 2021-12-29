import React from 'react';
import {View, Button, StyleSheet} from 'react-native';

// Constants
import Colors from '../constants/Colors';

const AppButton = props => {
  return(
    <View style={{...styles.button, ...props.style}}>
      <Button color="#FFF" title={props.title} onPress={props.onPress}/>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    borderRadius: 6
  }
});

export default AppButton;